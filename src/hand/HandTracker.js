import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { CONFIG } from '../config.js';

/**
 * HandTracker — palm position mapped to screen; cursor moves at hand speed (capped).
 */
export class HandTracker {
  constructor(videoElement) {
    this.video = videoElement;
    this.landmarker = null;
    this.isReady = false;

    this.tip = { x: 0, y: 0 };
    this.prevTip = { x: 0, y: 0 };
    this.rawTip = { x: 0, y: 0 };

    this.speed = 0;
    this.isSwiping = false;
    this.handDetected = false;
    this.landmarks = null;

    this._lastTimestamp = -1;
    this._initialized = false;
    this._prevRaw = { x: 0, y: 0 };
    this._swipeHistory = [];

    this._cal = {
      minX: 0.42,
      maxX: 0.58,
      minY: 0.42,
      maxY: 0.58,
    };
  }

  resetCalibration() {
    this._cal = { minX: 0.42, maxX: 0.58, minY: 0.42, maxY: 0.58 };
    this._initialized = false;
  }

  _getHandCenter(landmarks) {
    const ids = CONFIG.HAND.PALM_LANDMARKS;
    let x = 0;
    let y = 0;
    for (const i of ids) {
      x += landmarks[i].x;
      y += landmarks[i].y;
    }
    return { x: x / ids.length, y: y / ids.length };
  }

  _updateCalibration(nx, ny) {
    const pad = CONFIG.HAND.CALIB_PADDING;
    this._cal.minX = Math.min(this._cal.minX, nx - pad);
    this._cal.maxX = Math.max(this._cal.maxX, nx + pad);
    this._cal.minY = Math.min(this._cal.minY, ny - pad);
    this._cal.maxY = Math.max(this._cal.maxY, ny + pad);

    const minSpan = CONFIG.HAND.MIN_CALIB_SPAN;
    const cx = (this._cal.minX + this._cal.maxX) / 2;
    const cy = (this._cal.minY + this._cal.maxY) / 2;

    if (this._cal.maxX - this._cal.minX < minSpan) {
      this._cal.minX = cx - minSpan / 2;
      this._cal.maxX = cx + minSpan / 2;
    }
    if (this._cal.maxY - this._cal.minY < minSpan) {
      this._cal.minY = cy - minSpan / 2;
      this._cal.maxY = cy + minSpan / 2;
    }
  }

  _mapToWorld(nx, ny) {
    if (CONFIG.HAND.MIRROR_X) nx = 1 - nx;

    this._updateCalibration(nx, ny);

    const spanX = this._cal.maxX - this._cal.minX;
    const spanY = this._cal.maxY - this._cal.minY;

    let u = (nx - this._cal.minX) / spanX;
    let v = (ny - this._cal.minY) / spanY;
    u = Math.max(0, Math.min(1, u));
    v = Math.max(0, Math.min(1, v));

    const reach = CONFIG.HAND.REACH_MULTIPLIER;
    u = Math.max(0, Math.min(1, (u - 0.5) * reach + 0.5));
    v = Math.max(0, Math.min(1, (v - 0.5) * reach + 0.5));

    const halfW = CONFIG.WORLD.WIDTH / 2 - 0.2;
    const halfH = CONFIG.WORLD.HEIGHT / 2 - 0.2;

    return {
      worldX: Math.max(-halfW, Math.min(halfW, (u - 0.5) * CONFIG.WORLD.WIDTH)),
      worldY: Math.max(-halfH, Math.min(halfH, (0.5 - v) * CONFIG.WORLD.HEIGHT)),
    };
  }

  /** Move cursor toward target — speed matches hand, never exceeds max. */
  _moveCursorToward(targetX, targetY, dt) {
    if (!this._initialized) {
      this.tip.x = targetX;
      this.tip.y = targetY;
      this.prevTip.x = targetX;
      this.prevTip.y = targetY;
      this._prevRaw.x = targetX;
      this._prevRaw.y = targetY;
      this._initialized = true;
      return;
    }

    const dx = targetX - this.tip.x;
    const dy = targetY - this.tip.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 0.001) return;

    let handSpeed = 0;
    if (dt > 0) {
      handSpeed = Math.hypot(
        targetX - this._prevRaw.x,
        targetY - this._prevRaw.y
      ) / dt;
    }
    this._prevRaw.x = targetX;
    this._prevRaw.y = targetY;

    const { MAX_CURSOR_SPEED, MIN_CURSOR_SPEED, SPEED_FOLLOW } = CONFIG.HAND;

    // Cursor speed = hand speed (scaled), capped — gentle catch-up when lagging
    let moveSpeed = handSpeed * SPEED_FOLLOW;
    if (dist > 0.4 && moveSpeed < MIN_CURSOR_SPEED) {
      moveSpeed = MIN_CURSOR_SPEED;
    }
    moveSpeed = Math.min(moveSpeed, MAX_CURSOR_SPEED);

    const step = Math.min(dist, moveSpeed * dt);
    this.tip.x += (dx / dist) * step;
    this.tip.y += (dy / dist) * step;
  }

  async init() {
    const vision = await FilesetResolver.forVisionTasks(CONFIG.MEDIAPIPE.WASM_PATH);

    this.landmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: CONFIG.MEDIAPIPE.MODEL_PATH,
        delegate: 'GPU',
      },
      runningMode: 'VIDEO',
      numHands: 1,
      minHandDetectionConfidence: 0.4,
      minHandPresenceConfidence: 0.4,
      minTrackingConfidence: 0.35,
    });

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480, facingMode: 'user' },
    });
    this.video.srcObject = stream;
    await this.video.play();

    this.isReady = true;
  }

  update(timestamp, dt = 0.016) {
    if (!this.isReady || !this.landmarker) return;

    const results = this.landmarker.detectForVideo(this.video, timestamp);

    if (results.landmarks && results.landmarks.length > 0) {
      const landmarks = results.landmarks[0];
      this.landmarks = landmarks;

      const center = this._getHandCenter(landmarks);
      const { worldX, worldY } = this._mapToWorld(center.x, center.y);

      this.rawTip.x = worldX;
      this.rawTip.y = worldY;
      this.handDetected = true;

      this._moveCursorToward(worldX, worldY, dt);
    } else {
      this.handDetected = false;
      this.landmarks = null;
    }

    if (this._lastTimestamp > 0 && dt > 0 && this.handDetected) {
      const dx = this.tip.x - this.prevTip.x;
      const dy = this.tip.y - this.prevTip.y;
      this.speed = Math.hypot(dx, dy) / dt;
      const threshold = CONFIG.HAND.SWIPE_SPEED_THRESHOLD;
      const release = threshold * 0.6;
      this.isSwiping = this.isSwiping
        ? this.speed >= release
        : this.speed >= threshold;
    } else if (!this.handDetected) {
      this.speed = 0;
      this.isSwiping = false;
    }

    if (this.isSwiping && this.handDetected) {
      this._swipeHistory.push({ x: this.tip.x, y: this.tip.y });
      if (this._swipeHistory.length > 12) this._swipeHistory.shift();
    } else {
      this._swipeHistory.length = 0;
    }

    this.prevTip.x = this.tip.x;
    this.prevTip.y = this.tip.y;
    this._lastTimestamp = timestamp;
  }

  getSwipeSegment() {
    if (this._swipeHistory.length >= 2) {
      const first = this._swipeHistory[0];
      const last = this._swipeHistory[this._swipeHistory.length - 1];
      return { x1: first.x, y1: first.y, x2: last.x, y2: last.y };
    }
    return {
      x1: this.prevTip.x,
      y1: this.prevTip.y,
      x2: this.tip.x,
      y2: this.tip.y,
    };
  }
}
