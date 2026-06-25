import { CONFIG } from '../config.js';
import { Fruit } from './Fruit.js';
import { Bomb } from './Bomb.js';
import { Sword } from './Sword.js';
import { SwordTrail } from './SwordTrail.js';
import { ParticleSystem } from './ParticleSystem.js';
import { segmentHitsCircle } from '../utils/collision.js';

/**
 * Game — spawning, physics, slicing; difficulty rises with score tiers.
 */
export class Game {
  constructor(sceneManager, handTracker, ui, audio) {
    this.sceneManager = sceneManager;
    this.handTracker = handTracker;
    this.ui = ui;
    this.audio = audio;
    this.scene = sceneManager.scene;

    this.sword = new Sword(this.scene);
    this.trail = new SwordTrail(this.scene);
    this.particles = new ParticleSystem(this.scene);

    this.fruits = [];
    this.bombs = [];
    this.halves = [];

    this.score = 0;
    this.lives = CONFIG.GAME.INITIAL_LIVES;
    this.combo = 1;
    this.comboTimer = 0;
    this.difficultyTier = 0;

    this.spawnTimer = 0;
    this.nextSpawn = 1.0;
    this.running = false;
    this.gameOver = false;
  }

  /** Difficulty 0→1 based on score tiers (fruits spawn & fly faster). */
  _getDifficulty() {
    const tier = Math.floor(this.score / CONFIG.GAME.SCORE_TIER);
    if (tier !== this.difficultyTier) {
      this.difficultyTier = tier;
    }
    const spawnFactor = Math.max(
      CONFIG.GAME.MIN_SPAWN_FACTOR,
      1 - tier * CONFIG.GAME.SPAWN_FASTER_BY
    );
    const fruitSpeedFactor = Math.min(
      CONFIG.GAME.MAX_FRUIT_SPEED_FACTOR,
      1 + tier * CONFIG.GAME.FRUIT_SPEEDUP_BY
    );
    return { tier, spawnFactor, fruitSpeedFactor };
  }

  _rollSpawnDelay() {
    const { spawnFactor } = this._getDifficulty();
    const p = CONFIG.PHYSICS;
    const min = p.SPAWN_INTERVAL_MIN * spawnFactor;
    const max = p.SPAWN_INTERVAL_MAX * spawnFactor;
    return min + Math.random() * (max - min);
  }

  start() {
    this.reset();
    this.handTracker.resetCalibration();
    this.running = true;
    this.gameOver = false;
    this.ui.updateScore(0);
    this.ui.updateLives(this.lives);
    this.ui.updateCombo(1);
    this.nextSpawn = this._rollSpawnDelay();
  }

  reset() {
    this._clearEntities();
    this.score = 0;
    this.lives = CONFIG.GAME.INITIAL_LIVES;
    this.combo = 1;
    this.comboTimer = 0;
    this.difficultyTier = 0;
    this.spawnTimer = 0;
    this.particles.clear();
    this.trail.clear();
  }

  _clearEntities() {
    for (const f of this.fruits) f.dispose();
    for (const b of this.bombs) b.dispose();
    for (const h of this.halves) {
      this.scene.remove(h.mesh);
      h.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    this.fruits = [];
    this.bombs = [];
    this.halves = [];
    this.sword.group.visible = false;
  }

  stop(reason = 'Game Over') {
    this.running = false;
    this.gameOver = true;
    this.ui.showGameOver(this.score, reason);
  }

  update(dt) {
    if (!this.running) return;

    const { tip, isSwiping, handDetected, speed } = this.handTracker;

    this.sword.update(tip.x, tip.y, isSwiping, handDetected);
    this.ui.updateHandStatus(handDetected, isSwiping);

    if (isSwiping && handDetected) {
      this.trail.addPoint(tip.x, tip.y, speed);
      this._checkSlices();
    }
    this.trail.update();

    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        this.combo = 1;
        this.ui.updateCombo(this.combo);
      }
    }

    this.spawnTimer += dt;
    if (this.spawnTimer >= this.nextSpawn) {
      this.spawnTimer = 0;
      this._spawnEntity();
      this.nextSpawn = this._rollSpawnDelay();
    }

    for (let i = this.fruits.length - 1; i >= 0; i--) {
      const fruit = this.fruits[i];
      fruit.update(dt);
      if (fruit.isOffScreen()) {
        fruit.dispose();
        this.fruits.splice(i, 1);
        this._loseLife();
      }
    }

    for (let i = this.bombs.length - 1; i >= 0; i--) {
      const bomb = this.bombs[i];
      bomb.update(dt);
      if (bomb.isOffScreen()) {
        bomb.dispose();
        this.bombs.splice(i, 1);
      }
    }

    for (let i = this.halves.length - 1; i >= 0; i--) {
      const h = this.halves[i];
      h.vy += CONFIG.PHYSICS.GRAVITY * dt;
      h.mesh.position.x += h.vx * dt;
      h.mesh.position.y += h.vy * dt;
      h.mesh.rotation.z += h.rotationSpeed * dt;
      h.life -= dt;
      if (h.life <= 0) {
        this.scene.remove(h.mesh);
        this.halves.splice(i, 1);
      }
    }

    this.particles.update(dt);
  }

  /** Keep juice, halves, and blast effects animating after game over. */
  updateVisuals(dt) {
    for (let i = this.halves.length - 1; i >= 0; i--) {
      const h = this.halves[i];
      h.vy += CONFIG.PHYSICS.GRAVITY * dt;
      h.mesh.position.x += h.vx * dt;
      h.mesh.position.y += h.vy * dt;
      h.mesh.rotation.z += h.rotationSpeed * dt;
      h.life -= dt;
      if (h.life <= 0) {
        this.scene.remove(h.mesh);
        this.halves.splice(i, 1);
      }
    }
    this.particles.update(dt);
  }

  hasActiveVisuals() {
    return this.halves.length > 0 || this.particles.hasActive;
  }

  _spawnEntity() {
    const p = CONFIG.PHYSICS;
    const x = p.SPAWN_X_MIN + Math.random() * (p.SPAWN_X_MAX - p.SPAWN_X_MIN);
    const { fruitSpeedFactor } = this._getDifficulty();

    if (Math.random() < CONFIG.BOMB.SPAWN_CHANCE) {
      const bomb = new Bomb(this.scene);
      bomb.launch(x, fruitSpeedFactor);
      this.bombs.push(bomb);
    } else {
      const type = CONFIG.FRUIT_TYPES[Math.floor(Math.random() * CONFIG.FRUIT_TYPES.length)];
      const fruit = new Fruit(type, this.scene);
      fruit.launch(x, fruitSpeedFactor);
      this.fruits.push(fruit);
    }
  }

  _checkSlices() {
    const seg = this.handTracker.getSwipeSegment();
    const hitPad = CONFIG.HAND.SLICE_HIT_PADDING;

    for (const bomb of this.bombs) {
      if (!bomb.alive) continue;
      const pos = bomb.getPosition();
      if (segmentHitsCircle(seg, pos.x, pos.y, bomb.radius + CONFIG.SWORD.RADIUS + hitPad)) {
        bomb.alive = false;
        this.particles.spawnExplosion(pos.x, pos.y);
        bomb.dispose();
        this.bombs = this.bombs.filter((b) => b !== bomb);
        this.audio.playBomb();
        this.stop('💣 You sliced a bomb!');
        return;
      }
    }

    for (let i = this.fruits.length - 1; i >= 0; i--) {
      const fruit = this.fruits[i];
      if (!fruit.alive || fruit.sliced) continue;

      const pos = fruit.getPosition();
      if (segmentHitsCircle(seg, pos.x, pos.y, fruit.radius + CONFIG.SWORD.RADIUS + hitPad)) {
        const halves = fruit.slice(seg);
        this.halves.push(...halves);
        this.fruits.splice(i, 1);

        this.particles.spawnJuice(pos.x, pos.y, fruit.juiceColor);
        this.audio.playSlice();

        this.comboTimer = CONFIG.GAME.COMBO_TIMEOUT;
        this.combo = Math.min(this.combo + 1, CONFIG.GAME.MAX_COMBO);
        this.score += Math.round(fruit.scoreValue * this.combo);

        this.ui.updateScore(this.score);
        this.ui.updateCombo(this.combo);
      }
    }
  }

  _loseLife() {
    this.lives--;
    this.combo = 1;
    this.comboTimer = 0;
    this.ui.updateLives(this.lives);
    this.ui.updateCombo(this.combo);

    if (this.lives <= 0) {
      this.stop('No lives remaining!');
    }
  }
}
