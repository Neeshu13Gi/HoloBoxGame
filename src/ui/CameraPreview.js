import { CONFIG } from '../config.js';

const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17],
];

/**
 * CameraPreview — hand skeleton + palm center (sword position).
 */
export class CameraPreview {
  constructor(video, canvas, placeholder) {
    this.video = video;
    this.canvas = canvas;
    this.placeholder = placeholder;
    this.ctx = canvas.getContext('2d');

    this._syncSize();
    this._resizeObserver = new ResizeObserver(() => this._syncSize());
    this._resizeObserver.observe(canvas.parentElement);
  }

  _syncSize() {
    const frame = this.canvas.parentElement;
    this.canvas.width = frame.clientWidth;
    this.canvas.height = frame.clientHeight;
  }

  showVideo() {
    this.placeholder.classList.add('hidden');
  }

  _toPixel(lm) {
    let x = lm.x;
    if (CONFIG.HAND.MIRROR_X) x = 1 - x;
    return { x: x * this.canvas.width, y: lm.y * this.canvas.height };
  }

  _getPalmCenter(pts) {
    const ids = CONFIG.HAND.PALM_LANDMARKS;
    let x = 0;
    let y = 0;
    for (const i of ids) {
      x += pts[i].x;
      y += pts[i].y;
    }
    return { x: x / ids.length, y: y / ids.length };
  }

  draw(handTracker) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (!handTracker.landmarks) return;

    const pts = handTracker.landmarks;
    const palmR = Math.max(5, this.canvas.width * 0.07);
    const jointR = Math.max(2, this.canvas.width * 0.022);

    ctx.strokeStyle = 'rgba(139, 92, 246, 0.5)';
    ctx.lineWidth = 1.5;
    for (const [a, b] of HAND_CONNECTIONS) {
      const p0 = this._toPixel(pts[a]);
      const p1 = this._toPixel(pts[b]);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }

    for (let i = 0; i < pts.length; i++) {
      const { x, y } = this._toPixel(pts[i]);
      ctx.beginPath();
      ctx.arc(x, y, jointR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
    }

    // Palm center = sword position
    const palm = this._getPalmCenter(pts);
    const px = this._toPixel(palm);
    ctx.beginPath();
    ctx.arc(px.x, px.y, palmR, 0, Math.PI * 2);
    ctx.fillStyle = handTracker.isSwiping ? '#ec4899' : '#8b5cf6';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px.x, px.y, palmR * 1.6, 0, Math.PI * 2);
    ctx.strokeStyle = handTracker.isSwiping
      ? 'rgba(236, 72, 153, 0.75)'
      : 'rgba(139, 92, 246, 0.55)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
