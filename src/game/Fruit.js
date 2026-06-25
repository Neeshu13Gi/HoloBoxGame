import * as THREE from 'three';
import { CONFIG } from '../config.js';
import {
  getFruitSkinTextures,
  getFruitSliceTexture,
  createAppleProfile,
  createBananaCurve,
} from '../utils/fruitTextures.js';

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

function fleshMaterial(sliceTex) {
  return new THREE.MeshStandardMaterial({
    map: sliceTex,
    roughness: 0.82,
    metalness: 0,
  });
}

/**
 * Fruit — realistic meshes with swipe-aligned slicing.
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
    const tex = getFruitSkinTextures(type);

    if (type === 'apple') {
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
      const curve = createBananaCurve();
      const body = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 32, 0.14, 18, false),
        skinMaterial(tex, { roughness: 0.48, clearcoat: 0.25, bumpScale: 0.018 })
      );
      group.add(body);
      this._bananaCurve = curve;

      for (const [x, y, z] of [
        [-0.46, -0.18, 0.02],
        [0.54, -0.12, -0.05],
      ]) {
        const tip = new THREE.Mesh(
          new THREE.SphereGeometry(0.08, 10, 10),
          new THREE.MeshStandardMaterial({ color: 0x5a3810, roughness: 0.88 })
        );
        tip.scale.set(0.85, 1.15, 0.8);
        tip.position.set(x, y, z);
        group.add(tip);
      }
      this.radius = 0.52;
    } else if (type === 'watermelon') {
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

  _getSliceVectors(sliceSeg) {
    let dx = sliceSeg.x2 - sliceSeg.x1;
    let dy = sliceSeg.y2 - sliceSeg.y1;
    const len = Math.hypot(dx, dy);
    if (len < 0.05) {
      dx = Math.cos(this.mesh.rotation.z);
      dy = Math.sin(this.mesh.rotation.z);
    } else {
      dx /= len;
      dy /= len;
    }
    const splitAngle = Math.atan2(dy, dx) + Math.PI / 2;
    return {
      sepX: Math.cos(splitAngle),
      sepY: Math.sin(splitAngle),
      splitAngle,
    };
  }

  slice(sliceSeg) {
    this.sliced = true;
    this.alive = false;

    const pos = this.mesh.position.clone();
    this.scene.remove(this.mesh);

    if (this.type === 'banana') {
      return this._sliceBanana(pos, sliceSeg);
    }
    return this._sliceRound(pos, sliceSeg);
  }

  _sliceRound(pos, sliceSeg) {
    const { sepX, sepY, splitAngle } = this._getSliceVectors(sliceSeg);
    const sliceTex = getFruitSliceTexture(this.type);
    const skinTex = getFruitSkinTextures(this.type);
    const r = this.radius;
    const halves = [];

    for (let side = -1; side <= 1; side += 2) {
      const half = new THREE.Group();
      half.rotation.z = splitAngle;

      const shellGeo = new THREE.SphereGeometry(r * 0.93, 32, 32, 0, Math.PI);
      const shell = new THREE.Mesh(
        shellGeo,
        skinMaterial(skinTex, { roughness: 0.5, clearcoat: 0.35, bumpScale: 0.02 })
      );
      if (side < 0) shell.scale.x = -1;
      half.add(shell);

      const flesh = new THREE.Mesh(new THREE.CircleGeometry(r * 0.84, 40), fleshMaterial(sliceTex));
      flesh.rotation.y = Math.PI / 2;
      flesh.position.x = side * 0.02;
      half.add(flesh);

      if (this.type === 'watermelon') {
        const rind = new THREE.Mesh(
          new THREE.RingGeometry(r * 0.84, r * 0.93, 40),
          new THREE.MeshStandardMaterial({ color: 0xeaf6ea, roughness: 0.85 })
        );
        rind.rotation.y = Math.PI / 2;
        rind.position.x = side * 0.015;
        half.add(rind);
      }

      half.position.set(pos.x + sepX * side * 0.14, pos.y + sepY * side * 0.14, pos.z);
      this.scene.add(half);

      halves.push({
        mesh: half,
        vx: this.vx + sepX * side * 3.5,
        vy: this.vy + sepY * side * 3.5 + 1.6,
        rotationSpeed: side * 5 + this.rotationSpeed * 0.4,
        life: 1.5,
      });
    }

    return halves;
  }

  _sliceBanana(pos, sliceSeg) {
    const { sepX, sepY, splitAngle } = this._getSliceVectors(sliceSeg);
    const sliceTex = getFruitSliceTexture('banana');
    const skinTex = getFruitSkinTextures('banana');
    const curve = createBananaCurve();
    const halves = [];

    for (let side = -1; side <= 1; side += 2) {
      const half = new THREE.Group();
      half.rotation.z = splitAngle;

      const tStart = side < 0 ? 0 : 0.48;
      const tEnd = side < 0 ? 0.52 : 1;
      const subCurve = new THREE.CatmullRomCurve3(
        curve.getPoints(24).slice(Math.floor(tStart * 24), Math.ceil(tEnd * 24) + 1)
      );
      if (subCurve.points.length >= 2) {
        const chunk = new THREE.Mesh(
          new THREE.TubeGeometry(subCurve, 16, 0.13, 14, false),
          skinMaterial(skinTex, { roughness: 0.5, clearcoat: 0.2 })
        );
        chunk.position.x = side * 0.08;
        half.add(chunk);
      }

      const flesh = new THREE.Mesh(new THREE.CircleGeometry(0.12, 20), fleshMaterial(sliceTex));
      flesh.rotation.y = Math.PI / 2;
      flesh.position.x = side * 0.04;
      half.add(flesh);

      half.position.set(pos.x + sepX * side * 0.22, pos.y + sepY * side * 0.22, pos.z);
      this.scene.add(half);

      halves.push({
        mesh: half,
        vx: this.vx + sepX * side * 3.2,
        vy: this.vy + sepY * side * 3.2 + 1.4,
        rotationSpeed: side * 7,
        life: 1.3,
      });
    }

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
