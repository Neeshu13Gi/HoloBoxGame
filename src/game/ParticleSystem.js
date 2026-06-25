import * as THREE from 'three';
import { CONFIG } from '../config.js';

/**
 * ParticleSystem — realistic juice splashes and bomb explosions.
 */
export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this._pool = [];
  }

  get hasActive() {
    return this.particles.length > 0;
  }

  _acquire(kind) {
    let p = this._pool.find((x) => !x.alive && x.kind === kind);
    if (!p) {
      const geo =
        kind === 'mist'
          ? new THREE.PlaneGeometry(0.08, 0.08)
          : kind === 'streak'
            ? new THREE.CylinderGeometry(0.015, 0.04, 0.12, 5)
            : new THREE.SphereGeometry(0.05, 6, 6);

      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        roughness: kind === 'debris' ? 0.6 : 0.25,
        metalness: kind === 'debris' ? 0.7 : 0,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      p = { mesh, mat, geo, alive: false, kind };
      this._pool.push(p);
    }
    return p;
  }

  spawnJuice(x, y, color) {
    const base = new THREE.Color(color);
    const cfg = CONFIG.PARTICLES;

    for (let i = 0; i < cfg.JUICE_DROPLETS; i++) {
      const p = this._acquire('droplet');
      this._initParticle(p, x, y, {
        color: base.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.08),
        scale: 0.35 + Math.random() * 0.55,
        life: cfg.JUICE_LIFETIME * (0.7 + Math.random() * 0.5),
        speed: cfg.JUICE_SPEED * (0.6 + Math.random() * 0.8),
        upward: 1.2 + Math.random() * 2.5,
        gravity: 0.35,
        drag: 0.98,
      });
    }

    for (let i = 0; i < cfg.JUICE_STREAKS; i++) {
      const p = this._acquire('streak');
      const angle = Math.random() * Math.PI * 2;
      const speed = cfg.JUICE_SPEED * (1.0 + Math.random() * 1.2);
      this._initParticle(p, x, y, {
        color: base,
        scale: 0.5 + Math.random() * 0.8,
        life: cfg.JUICE_LIFETIME * 0.45,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 2,
        gravity: 0.2,
        drag: 0.94,
        stretch: true,
      });
    }

    for (let i = 0; i < cfg.JUICE_MIST; i++) {
      const p = this._acquire('mist');
      this._initParticle(p, x, y, {
        color: base.clone().offsetHSL(0, -0.1, 0.15),
        scale: 0.25 + Math.random() * 0.45,
        life: cfg.JUICE_LIFETIME * 1.2,
        speed: cfg.JUICE_SPEED * 0.35,
        upward: 0.5 + Math.random(),
        gravity: -0.15,
        drag: 0.96,
        opacity: 0.45,
      });
    }
  }

  spawnExplosion(x, y) {
    const cfg = CONFIG.PARTICLES;

    const flash = this._acquire('droplet');
    this._initParticle(flash, x, y, {
      color: new THREE.Color(0xfff8e0),
      emissive: new THREE.Color(0xffaa00),
      emissiveIntensity: 2.5,
      scale: 0.5,
      life: cfg.BLAST_FLASH_TIME,
      vx: 0,
      vy: 0,
      gravity: 0,
      drag: 1,
      expand: 8,
      opacity: 0.95,
    });

    for (let i = 0; i < cfg.BLAST_FIRE; i++) {
      const p = this._acquire('droplet');
      const angle = Math.random() * Math.PI * 2;
      const speed = cfg.BLAST_SPEED * (0.5 + Math.random());
      const t = Math.random();
      const fireColor = new THREE.Color().lerpColors(
        new THREE.Color(0xffee88),
        new THREE.Color(0xff2200),
        t
      );
      this._initParticle(p, x, y, {
        color: fireColor,
        emissive: fireColor,
        emissiveIntensity: 1.2 + Math.random(),
        scale: 0.4 + Math.random() * 0.7,
        life: cfg.BLAST_FIRE_LIFE * (0.6 + Math.random() * 0.6),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 1.5,
        gravity: -0.5,
        drag: 0.97,
        shrink: 0.85,
      });
    }

    for (let i = 0; i < cfg.BLAST_SMOKE; i++) {
      const p = this._acquire('mist');
      const angle = Math.random() * Math.PI * 2;
      const speed = cfg.BLAST_SPEED * (0.25 + Math.random() * 0.35);
      const gray = 0.15 + Math.random() * 0.25;
      this._initParticle(p, x, y, {
        color: new THREE.Color(gray, gray, gray),
        scale: 0.6 + Math.random() * 0.9,
        life: cfg.BLAST_SMOKE_LIFE * (0.7 + Math.random() * 0.5),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 1.8,
        gravity: -0.8,
        drag: 0.98,
        expand: 2.5 + Math.random() * 2,
        opacity: 0.55,
      });
    }

    for (let i = 0; i < cfg.BLAST_SPARKS; i++) {
      const p = this._acquire('streak');
      const angle = Math.random() * Math.PI * 2;
      const speed = cfg.BLAST_SPEED * (1.2 + Math.random() * 1.5);
      this._initParticle(p, x, y, {
        color: new THREE.Color(0xffdd44),
        emissive: new THREE.Color(0xff8800),
        emissiveIntensity: 2,
        scale: 0.2 + Math.random() * 0.25,
        life: cfg.BLAST_SPARK_LIFE,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.15,
        drag: 0.92,
        stretch: true,
      });
    }

    for (let i = 0; i < cfg.BLAST_DEBRIS; i++) {
      const p = this._acquire('debris');
      const angle = Math.random() * Math.PI * 2;
      const speed = cfg.BLAST_SPEED * (0.6 + Math.random() * 0.9);
      this._initParticle(p, x, y, {
        color: new THREE.Color(0x2a2a2a),
        scale: 0.25 + Math.random() * 0.35,
        life: cfg.BLAST_DEBRIS_LIFE,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 1,
        gravity: 0.4,
        drag: 0.98,
        spin: (Math.random() - 0.5) * 12,
      });
    }
  }

  _initParticle(p, x, y, opts) {
    p.mesh.position.set(x, y, 0.55 + Math.random() * 0.15);
    p.mat.color.copy(opts.color);
    p.mat.emissive = opts.emissive ? opts.emissive.clone() : new THREE.Color(0x000000);
    p.mat.emissiveIntensity = opts.emissiveIntensity ?? 0.08;
    p.maxOpacity = opts.opacity ?? 1;
    p.mat.opacity = p.maxOpacity;
    p.mat.metalness = p.kind === 'debris' ? 0.65 : 0;
    p.mat.roughness = p.kind === 'debris' ? 0.55 : 0.25;
    p.mesh.scale.setScalar(opts.scale ?? 1);
    p.maxLife = opts.life;
    p.life = opts.life;
    p.gravity = opts.gravity ?? 0.3;
    p.drag = opts.drag ?? 0.98;
    p.expand = opts.expand ?? 0;
    p.shrink = opts.shrink ?? 1;
    p.stretch = opts.stretch ?? false;
    p.spin = opts.spin ?? 0;
    p.alive = true;

    if (opts.vx !== undefined) {
      p.vx = opts.vx;
      p.vy = opts.vy;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const speed = opts.speed ?? 3;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed + (opts.upward ?? 1.5);
    }

    if (p.stretch) {
      p.mesh.rotation.z = Math.atan2(p.vy, p.vx) + Math.PI / 2;
    }

    this.scene.add(p.mesh);
    this.particles.push(p);
  }

  /** @deprecated use spawnJuice */
  spawn(x, y, color) {
    this.spawnJuice(x, y, color);
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;

      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += CONFIG.PHYSICS.GRAVITY * p.gravity * dt;
      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;

      if (p.spin) p.mesh.rotation.z += p.spin * dt;

      const t = Math.max(0, p.life / p.maxLife);
      p.mat.opacity = p.maxOpacity * t;

      if (p.expand) {
        const grow = 1 + (1 - t) * p.expand;
        p.mesh.scale.setScalar((p.maxLife === CONFIG.PARTICLES.BLAST_FLASH_TIME ? 0.5 : 1) * grow);
        if (p.maxLife === CONFIG.PARTICLES.BLAST_FLASH_TIME) {
          p.mat.emissiveIntensity = 2.5 * t;
        }
      } else if (p.shrink !== 1) {
        p.mesh.scale.multiplyScalar(Math.pow(p.shrink, dt * 60));
      }

      if (p.kind === 'mist' && p.expand) {
        p.mesh.scale.multiplyScalar(1 + dt * p.expand * 0.15);
      }

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.alive = false;
        this.particles.splice(i, 1);
      }
    }
  }

  clear() {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
      p.alive = false;
    }
    this.particles = [];
  }
}
