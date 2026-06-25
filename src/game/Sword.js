import * as THREE from 'three';
import { CONFIG } from '../config.js';

/**
 * Sword — follows whole-hand position on screen.
 */
export class Sword {
  constructor(scene) {
    this.scene = scene;
    const { RADIUS, GLOW_COLOR, CORE_COLOR } = CONFIG.SWORD;

    this.glow = new THREE.Mesh(
      new THREE.RingGeometry(RADIUS * 0.8, RADIUS * 2.8, 32),
      new THREE.MeshBasicMaterial({
        color: GLOW_COLOR,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
      })
    );

    this.core = new THREE.Mesh(
      new THREE.CircleGeometry(RADIUS * 0.85, 20),
      new THREE.MeshBasicMaterial({
        color: CORE_COLOR,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      })
    );

    this.blade = new THREE.Mesh(
      new THREE.PlaneGeometry(RADIUS * 0.35, RADIUS * 3.2),
      new THREE.MeshBasicMaterial({
        color: GLOW_COLOR,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    this.blade.position.y = RADIUS * 1.2;

    this.group = new THREE.Group();
    this.group.add(this.glow);
    this.group.add(this.core);
    this.group.add(this.blade);
    this.group.visible = false;
    scene.add(this.group);
  }

  update(x, y, isSwiping, handDetected) {
    this.group.visible = handDetected;
    if (!handDetected) return;

    this.group.position.set(x, y, 0.6);

    const scale = isSwiping ? 1.7 : 1.0;
    this.glow.scale.setScalar(scale);
    this.glow.material.opacity = isSwiping ? 0.85 : 0.4;
    this.core.material.opacity = isSwiping ? 1.0 : 0.75;
    this.blade.material.opacity = isSwiping ? 0.75 : 0.35;
    this.blade.scale.y = isSwiping ? 1.3 : 1.0;
  }
}
