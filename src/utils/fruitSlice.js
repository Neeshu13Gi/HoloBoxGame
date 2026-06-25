import * as THREE from 'three';
import { createBananaCurve } from './fruitTextures.js';

/**
 * Build swipe-aligned clip planes and cut-face orientation.
 */
export function getSliceFrame(sliceSeg, fallbackAngle = 0) {
  let dx = sliceSeg.x2 - sliceSeg.x1;
  let dy = sliceSeg.y2 - sliceSeg.y1;
  const len = Math.hypot(dx, dy);
  if (len < 0.08) {
    dx = Math.cos(fallbackAngle);
    dy = Math.sin(fallbackAngle);
  } else {
    dx /= len;
    dy /= len;
  }
  const sepX = -dy;
  const sepY = dx;
  return { swipeX: dx, swipeY: dy, sepX, sepY };
}

export function makeHalfClipPlane(sepX, sepY, cx, cy, side) {
  const nx = sepX * side;
  const ny = sepY * side;
  return new THREE.Plane(new THREE.Vector3(-nx, -ny, 0), nx * cx + ny * cy);
}

export function applyClipping(root, plane) {
  root.traverse((child) => {
    if (!child.isMesh) return;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    child.material = mats.map((m) => {
      const cloned = m.clone();
      cloned.clippingPlanes = [plane];
      cloned.clipShadows = true;
      cloned.side = THREE.FrontSide;
      return cloned;
    });
    if (child.material.length === 1) child.material = child.material[0];
  });
}

export function createCutFace(radius, sliceTex, pos, sepX, sepY) {
  const cut = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 0.9, 48),
    new THREE.MeshStandardMaterial({
      map: sliceTex,
      roughness: 0.78,
      metalness: 0,
      side: THREE.DoubleSide,
    })
  );
  cut.position.copy(pos);
  cut.position.z += 0.08;
  cut.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(sepX, sepY, 0)
  );
  return cut;
}

export function createBananaGroup() {
  const group = new THREE.Group();
  const curve = createBananaCurve();
  const points = curve.getPoints(16);
  const yellow = new THREE.MeshStandardMaterial({
    color: 0xffe566,
    roughness: 0.38,
    metalness: 0,
  });
  const yellowDark = new THREE.MeshStandardMaterial({
    color: 0xf0d040,
    roughness: 0.45,
  });
  const brown = new THREE.MeshStandardMaterial({
    color: 0x4a3010,
    roughness: 0.88,
  });

  for (let i = 0; i < points.length; i++) {
    const t = i / (points.length - 1);
    const p = points[i];
    const bulge = 0.55 + Math.sin(t * Math.PI) * 0.45;
    const rx = 0.11 * bulge;
    const ry = 0.095 * bulge;
    const rz = 0.085 * bulge;

    const seg = new THREE.Mesh(
      new THREE.SphereGeometry(1, 14, 14),
      t < 0.08 || t > 0.92 ? brown : t > 0.35 && t < 0.65 ? yellow : yellowDark
    );
    seg.scale.set(rx * 2.2, ry * 2.2, rz * 2.2);
    seg.position.copy(p);

    if (i < points.length - 1) {
      const next = points[i + 1];
      seg.rotation.z = Math.atan2(next.y - p.y, next.x - p.x);
    }

    group.add(seg);
  }

  for (let i = 2; i < points.length - 2; i += 3) {
    const p = points[i];
    const spot = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 8),
      brown
    );
    spot.scale.set(1.8, 1.1, 0.6);
    spot.position.set(p.x + 0.04, p.y + 0.03, p.z + 0.06);
    group.add(spot);
  }

  return group;
}

export function getBananaRadius() {
  return 0.5;
}
