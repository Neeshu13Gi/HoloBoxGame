import * as THREE from 'three';

const cache = new Map();

function hash(nx, ny, nz) {
  const n = Math.sin(nx * 127.1 + ny * 311.7 + nz * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

function paintEquirect(ctx, size, sample) {
  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    const v = y / (size - 1);
    const theta = v * Math.PI;
    const sinT = Math.sin(theta);
    const cosT = Math.cos(theta);
    for (let x = 0; x < size; x++) {
      const u = x / (size - 1);
      const phi = u * Math.PI * 2;
      const nx = -sinT * Math.cos(phi);
      const ny = cosT;
      const nz = sinT * Math.sin(phi);
      const [r, g, b] = sample(nx, ny, nz, u, v);
      const i = (y * size + x) * 4;
      d[i] = r;
      d[i + 1] = g;
      d[i + 2] = b;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

function makeTexture(key, drawFn, { bump = true } = {}) {
  if (cache.has(key)) return cache.get(key);

  const size = 384;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  drawFn(ctx, size);

  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;
  map.anisotropy = 4;

  let bumpMap = null;
  if (bump) {
    const bumpCanvas = document.createElement('canvas');
    bumpCanvas.width = size;
    bumpCanvas.height = size;
    const bctx = bumpCanvas.getContext('2d');
    bctx.drawImage(canvas, 0, 0);
    const img = bctx.getImageData(0, 0, size, size);
    const bd = img.data;
    for (let i = 0; i < bd.length; i += 4) {
      const g = bd[i] * 0.299 + bd[i + 1] * 0.587 + bd[i + 2] * 0.114;
      bd[i] = bd[i + 1] = bd[i + 2] = g;
    }
    bctx.putImageData(img, 0, 0);
    bumpMap = new THREE.CanvasTexture(bumpCanvas);
    bumpMap.wrapS = THREE.RepeatWrapping;
    bumpMap.wrapT = THREE.ClampToEdgeWrapping;
  }

  const entry = { map, bumpMap };
  cache.set(key, entry);
  return entry;
}

function appleColor(nx, ny, nz) {
  const n = hash(nx * 3, ny * 3, nz * 3);
  const n2 = hash(nx * 9 + 1, ny * 9, nz * 9);
  let r = 185 + n * 35;
  let g = 28 + n2 * 22;
  let b = 32 + n * 18;
  if (ny > 0.55) {
    g += 35;
    r -= 20;
  }
  if (ny < -0.35) {
    r += 15;
    g += 10;
  }
  const blush = Math.max(0, 0.35 - Math.hypot(nx + 0.2, nz - 0.1));
  r += blush * 80;
  g += blush * 20;
  r += (n - 0.5) * 18;
  return [Math.min(255, r), Math.min(255, g), Math.min(255, b)];
}

function orangeColor(nx, ny, nz) {
  const pore = hash(nx * 22, ny * 22, nz * 22);
  const pore2 = hash(nx * 40 + 2, nz * 40, ny * 40);
  const bump = pore > 0.82 ? -18 : pore2 > 0.75 ? 12 : 0;
  const r = 235 + bump + (pore - 0.5) * 15;
  const g = 118 + bump * 0.55 + (pore2 - 0.5) * 20;
  const b = 18 + bump * 0.2;
  return [r, g, b];
}

function watermelonColor(nx, ny, nz) {
  const stripe = Math.sin(nz * 14 + nx * 2) > 0 ? 1 : 0;
  const n = hash(nx * 5, ny * 5, nz * 5);
  if (stripe) {
    return [34 + n * 18, 95 + n * 25, 38 + n * 12];
  }
  return [68 + n * 20, 145 + n * 25, 62 + n * 15];
}

function bananaColor(nx, ny, nz) {
  const along = (nx + 1) * 0.5;
  const spot = hash(nx * 12, ny * 8, nz * 6);
  let r = 248;
  let g = 214 + along * 25;
  let b = 58 + along * 10;
  if (along < 0.08 || along > 0.92) {
    r *= 0.55;
    g *= 0.65;
    b *= 0.7;
  }
  if (spot > 0.88) {
    r *= 0.45;
    g *= 0.55;
    b *= 0.5;
  }
  return [r, g, b];
}

function drawSliceFace(type, ctx, size) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 2;

  ctx.clearRect(0, 0, size, size);

  if (type === 'apple') {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, '#fff6e6');
    g.addColorStop(0.45, '#ffe4b8');
    g.addColorStop(0.78, '#f0c878');
    g.addColorStop(1, '#b87830');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(180,100,40,0.35)';
    ctx.lineWidth = 3;
    ctx.stroke();
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      ctx.fillStyle = '#3d2010';
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * r * 0.18, cy + Math.sin(a) * r * 0.18, 6, 4, a, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'orange') {
    ctx.fillStyle = '#f09020';
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      ctx.fillStyle = i % 2 === 0 ? '#ffb040' : '#ff9820';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r - 2, a, a + Math.PI / 5);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = '#fff0d0';
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#e87810';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  } else if (type === 'banana') {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, '#fff8dc');
    g.addColorStop(0.65, '#ffe680');
    g.addColorStop(1, '#e8c040');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === 'watermelon') {
    ctx.fillStyle = '#eef8ee';
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    const g = ctx.createRadialGradient(cx, cy, r * 0.08, cx, cy, r * 0.82);
    g.addColorStop(0, '#ff6688');
    g.addColorStop(0.7, '#ee2244');
    g.addColorStop(0.92, '#cc1133');
    g.addColorStop(1, '#eef8ee');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.82, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.2;
      const dist = r * (0.15 + (i % 3) * 0.18);
      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 3, 5, a, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export function getFruitSkinTextures(type) {
  const drawers = {
    apple: (ctx, size) => paintEquirect(ctx, size, appleColor),
    orange: (ctx, size) => paintEquirect(ctx, size, orangeColor),
    banana: (ctx, size) => {
      paintEquirect(ctx, size, bananaColor);
    },
    watermelon: (ctx, size) => paintEquirect(ctx, size, watermelonColor),
  };
  return makeTexture(`skin-${type}`, drawers[type]);
}

export function getFruitSliceTexture(type) {
  return makeTexture(`slice-${type}`, (ctx, size) => drawSliceFace(type, ctx, size), { bump: false }).map;
}

export function createAppleProfile(radius) {
  const pts = [];
  const steps = 24;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = t * Math.PI;
    const y = Math.cos(angle) * radius;
    const pinch = 1 - 0.12 * Math.pow(Math.sin(t * Math.PI), 1.6);
    const x = Math.sin(angle) * radius * pinch;
    pts.push(new THREE.Vector2(x, y));
  }
  return pts;
}

export function createBananaCurve() {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.44, -0.2, 0.02),
    new THREE.Vector3(-0.2, 0, 0.05),
    new THREE.Vector3(0.05, 0.2, 0.04),
    new THREE.Vector3(0.28, 0.24, 0.01),
    new THREE.Vector3(0.46, 0.06, -0.03),
    new THREE.Vector3(0.52, -0.1, -0.05),
  ]);
}
