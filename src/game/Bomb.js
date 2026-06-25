import * as THREE from 'three';
import { CONFIG } from '../config.js';

/**
 * Bomb — realistic metal bomb with fuse; slicing it triggers an explosion.
 */
export class Bomb {
  constructor(scene) {
    this.scene = scene;
    this.alive = true;
    this.sliced = false;
    this.radius = CONFIG.BOMB.RADIUS;
    this.sparkPhase = Math.random() * Math.PI * 2;

    this.vx = 0;
    this.vy = 0;
    this.rotationSpeed = (Math.random() - 0.5) * CONFIG.PHYSICS.ROTATION_SPEED;

    this.mesh = this._createMesh();
    this.spark = this.mesh.getObjectByName('spark');
    this.fuseEmber = this.mesh.getObjectByName('fuseEmber');
    scene.add(this.mesh);
  }

  _createMesh() {
    const group = new THREE.Group();
    const r = this.radius;

    const body = new THREE.Mesh(
      new THREE.SphereGeometry(r, 32, 32),
      new THREE.MeshPhysicalMaterial({
        color: 0x2a2a2a,
        roughness: 0.28,
        metalness: 0.88,
        clearcoat: 0.55,
        clearcoatRoughness: 0.15,
      })
    );
    body.castShadow = true;
    group.add(body);

    // Red warning band
    const bandMat = new THREE.MeshStandardMaterial({
      color: 0xcc1111,
      roughness: 0.45,
      metalness: 0.35,
    });
    for (let i = 0; i < 2; i++) {
      const band = new THREE.Mesh(
        new THREE.TorusGeometry(r * 0.94, 0.055, 10, 40),
        bandMat
      );
      band.rotation.x = Math.PI / 2;
      band.rotation.y = i * Math.PI * 0.5;
      group.add(band);
    }

    // Fuse rope
    const fuseCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, r, 0),
      new THREE.Vector3(0.05, r + 0.12, 0.02),
      new THREE.Vector3(-0.04, r + 0.24, -0.02),
      new THREE.Vector3(0.03, r + 0.36, 0.01),
    ]);
    const fuse = new THREE.Mesh(
      new THREE.TubeGeometry(fuseCurve, 12, 0.035, 8, false),
      new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.95 })
    );
    fuse.castShadow = true;
    group.add(fuse);

    const fuseEmber = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 10, 10),
      new THREE.MeshStandardMaterial({
        color: 0xff6600,
        emissive: 0xff3300,
        emissiveIntensity: 2,
        roughness: 0.4,
      })
    );
    fuseEmber.name = 'fuseEmber';
    fuseEmber.position.set(0.03, r + 0.38, 0.01);
    group.add(fuseEmber);

    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 8, 8),
      new THREE.MeshStandardMaterial({
        color: 0xffcc00,
        emissive: 0xff8800,
        emissiveIntensity: 3,
        transparent: true,
        opacity: 0.85,
        roughness: 0.2,
      })
    );
    spark.name = 'spark';
    spark.position.set(0.05, r + 0.42, 0.02);
    group.add(spark);

    // Skull / danger mark
    const skull = new THREE.Mesh(
      new THREE.RingGeometry(r * 0.22, r * 0.38, 4),
      new THREE.MeshStandardMaterial({
        color: 0xff2222,
        emissive: 0x880000,
        emissiveIntensity: 0.35,
        side: THREE.DoubleSide,
      })
    );
    skull.rotation.z = Math.PI / 4;
    group.add(skull);

    return group;
  }

  launch(x, speedFactor = 1) {
    const p = CONFIG.PHYSICS;
    this.mesh.position.set(x, CONFIG.WORLD.BOTTOM - this.radius, 0);
    this.vx = (Math.random() - 0.5) * p.LAUNCH_VX_RANGE * 2 * speedFactor;
    this.vy = (p.LAUNCH_VY_MIN + Math.random() * (p.LAUNCH_VY_MAX - p.LAUNCH_VY_MIN)) * speedFactor;
  }

  update(dt) {
    if (!this.alive) return;
    this.vy += CONFIG.PHYSICS.GRAVITY * dt;
    this.mesh.position.x += this.vx * dt;
    this.mesh.position.y += this.vy * dt;
    this.mesh.rotation.z += this.rotationSpeed * dt;

    this.sparkPhase += dt * 14;
    const pulse = 0.55 + Math.sin(this.sparkPhase) * 0.45;
    if (this.spark) {
      this.spark.material.emissiveIntensity = 2 + pulse * 2;
      this.spark.scale.setScalar(0.7 + pulse * 0.5);
      this.spark.position.y = this.radius + 0.42 + Math.sin(this.sparkPhase * 2) * 0.02;
    }
    if (this.fuseEmber) {
      this.fuseEmber.material.emissiveIntensity = 1.5 + pulse * 1.8;
    }
  }

  isOffScreen() {
    return this.mesh.position.y < CONFIG.WORLD.BOTTOM - this.radius - 1;
  }

  getPosition() {
    return this.mesh.position;
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }
}
