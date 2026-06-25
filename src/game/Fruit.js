import * as THREE from 'three';
import { CONFIG } from '../config.js';
import {
  getFruitSkinTextures,
  getFruitSliceTexture,
  createAppleProfile,
} from '../utils/fruitTextures.js';
import {
  getSliceFrame,
  makeHalfClipPlane,
  applyClipping,
  createCutFace,
  createBananaGroup,
  getBananaRadius,
} from '../utils/fruitSlice.js';

function skinMaterial(textures, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    map: textures.map,
    bumpMap: textures.bumpMap,
    bumpScale: opts.bumpScale ?? 0.025,
    roughness: opts.roughness ?? 0.42,
    metalness: 0,
    clearcoat: opts.clearcoat ?? 0.45,
    clearcoatRoughness: opts.clearcoatRoughness ?? 0.2,
    sheen: opts.sheen ?? 0.15,
    sheenRoughness: 0.5,
    sheenColor: opts.sheenColor ?? new THREE.Color(0xffffff),
  });
}

/**
 * Fruit — realistic meshes with clip-plane slicing along swipe direction.
 */
export class Fruit {
  constructor(type, scene) {
    this.type = type;
    this.scene = scene;
    this.alive = true;
    this.sliced = false;

    const def = CONFIG.FRUITS[type];
    this.radius = def.radius;
    this.scoreValue = def.score;
    this.juiceColor = def.juiceColor;

    this.vx = 0;
    this.vy = 0;
    this.rotationSpeed = (Math.random() - 0.5) * CONFIG.PHYSICS.ROTATION_SPEED * 2;

    this.mesh = this._createMesh(type, def);
    this._enableShadows(this.mesh);
    scene.add(this.mesh);
  }

  _enableShadows(obj) {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  _createMesh(type, def) {
    const group = new THREE.Group();

    if (type === 'apple') {
      const tex = getFruitSkinTextures(type);
      const body = new THREE.Mesh(
        new THREE.LatheGeometry(createAppleProfile(def.radius), 40),
        skinMaterial(tex, { roughness: 0.38, clearcoat: 0.7, bumpScale: 0.02, sheen: 0.25 })
      );
      group.add(body);

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.04, 0.22, 8),
        new THREE.MeshStandardMaterial({ color: 0x4a3018, roughness: 0.92 })
      );
      stem.position.set(0, def.radius * 0.88 + 0.08, 0);
      stem.rotation.z = 0.15;
      group.add(stem);

      const leaf = new THREE.Mesh(
        new THREE.ShapeGeometry(this._leafShape()),
        new THREE.MeshStandardMaterial({ color: 0x3d8a32, roughness: 0.5, side: THREE.DoubleSide })
      );
      leaf.scale.set(0.13, 0.13, 0.13);
      leaf.position.set(0.12, def.radius * 0.86 + 0.12, 0.05);
      leaf.rotation.set(-0.35, 0.25, -0.75);
      group.add(leaf);
    } else if (type === 'orange') {
      const tex = getFruitSkinTextures(type);
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(def.radius, 40, 40),
        skinMaterial(tex, { roughness: 0.78, clearcoat: 0.12, bumpScale: 0.045, sheen: 0.08 })
      );
      group.add(body);

      const navel = new THREE.Mesh(
        new THREE.CircleGeometry(0.05, 10),
        new THREE.MeshStandardMaterial({ color: 0xb85800, roughness: 0.95 })
      );
      navel.position.set(0, def.radius * 0.995, 0);
      group.add(navel);
    } else if (type === 'banana') {
      group.add(createBananaGroup());
      this.radius = getBananaRadius();
    } else if (type === 'watermelon') {
      const tex = getFruitSkinTextures(type);
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(def.radius, 40, 40),
        skinMaterial(tex, { roughness: 0.68, clearcoat: 0.18, bumpScale: 0.035 })
      );
      body.scale.set(1.12, 0.96, 1.08);
      group.add(body);
    }

    return group;
  }

  _leafShape() {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(0.85, 0.18, 1.15, 0);
    shape.quadraticCurveTo(0.75, -0.12, 0, 0);
    return shape;
  }

  launch(x, speedFactor = 1) {
    const p = CONFIG.PHYSICS;
    this.mesh.position.set(x, CONFIG.WORLD.BOTTOM - this.radius, 0);
    this.vx = (Math.random() - 0.5) * p.LAUNCH_VX_RANGE * 2 * speedFactor;
    this.vy = (p.LAUNCH_VY_MIN + Math.random() * (p.LAUNCH_VY_MAX - p.LAUNCH_VY_MIN)) * speedFactor;
  }

  update(dt) {
    if (!this.alive || this.sliced) return;

    this.vy += CONFIG.PHYSICS.GRAVITY * dt;
    this.mesh.position.x += this.vx * dt;
    this.mesh.position.y += this.vy * dt;
    this.mesh.rotation.z += this.rotationSpeed * dt;
  }

  isOffScreen() {
    return this.mesh.position.y < CONFIG.WORLD.BOTTOM - this.radius - 1;
  }

  getPosition() {
    return this.mesh.position;
  }

  slice(sliceSeg) {
    this.sliced = true;
    this.alive = false;

    const pos = this.mesh.position.clone();
    const rotZ = this.mesh.rotation.z;
    const { sepX, sepY } = getSliceFrame(sliceSeg, rotZ);
    const sliceTex = getFruitSliceTexture(this.type);
    const halves = [];

    for (let side = -1; side <= 1; side += 2) {
      const half = new THREE.Group();
      const piece = this.mesh.clone(true);
      piece.rotation.z = rotZ;
      half.add(piece);

      applyClipping(piece, makeHalfClipPlane(sepX, sepY, pos.x, pos.y, side));

      const cut = createCutFace(this.radius, sliceTex, new THREE.Vector3(0, 0, 0), sepX, sepY);
      half.add(cut);

      half.position.copy(pos);
      half.position.x += sepX * side * 0.06;
      half.position.y += sepY * side * 0.06;
      this.scene.add(half);

      halves.push({
        mesh: half,
        vx: this.vx + sepX * side * 4.2,
        vy: this.vy + sepY * side * 4.2 + 1.8,
        rotationSpeed: side * 4 + this.rotationSpeed * 0.35,
        life: 1.6,
      });
    }

    this.scene.remove(this.mesh);
    return halves;
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
        else child.material.dispose();
      }
    });
  }
}
