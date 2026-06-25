import * as THREE from 'three';
import { CONFIG } from '../config.js';

/**
 * SwordTrail — glowing ribbon that follows the fingertip during fast swipes.
 */
export class SwordTrail {
  constructor(scene) {
    this.scene = scene;
    this.points = [];
    this.maxPoints = CONFIG.TRAIL.MAX_POINTS;

    // Ribbon mesh built from dynamic buffer geometry
    this.positions = new Float32Array(this.maxPoints * 2 * 3);
    this.opacities = new Float32Array(this.maxPoints * 2);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    this.material = new THREE.MeshBasicMaterial({
      color: CONFIG.TRAIL.COLOR,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.visible = false;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  /** Add a trail point when swiping. */
  addPoint(x, y, speed) {
    const now = performance.now() / 1000;
    this.points.unshift({ x, y, time: now, speed });

    if (this.points.length > this.maxPoints) {
      this.points.pop();
    }
  }

  update() {
    const now = performance.now() / 1000;
    const fadeTime = CONFIG.TRAIL.FADE_TIME;

    // Remove stale points
    this.points = this.points.filter((p) => now - p.time < fadeTime);

    if (this.points.length < 2) {
      this.mesh.visible = false;
      return;
    }

    this.mesh.visible = true;
    let vi = 0;

    for (let i = 0; i < this.points.length - 1; i++) {
      const p0 = this.points[i];
      const p1 = this.points[i + 1];
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;

      const age = now - p0.time;
      const alpha = 1 - age / fadeTime;
      const halfW = CONFIG.TRAIL.WIDTH * alpha * 0.5;

      // Two vertices per segment side
      this.positions[vi++] = p0.x + nx * halfW;
      this.positions[vi++] = p0.y + ny * halfW;
      this.positions[vi++] = 0.3;
      this.positions[vi++] = p0.x - nx * halfW;
      this.positions[vi++] = p0.y - ny * halfW;
      this.positions[vi++] = 0.3;
    }

    this.geometry.setDrawRange(0, (this.points.length - 1) * 2);
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.computeVertexNormals();
  }

  clear() {
    this.points = [];
    this.mesh.visible = false;
  }
}
