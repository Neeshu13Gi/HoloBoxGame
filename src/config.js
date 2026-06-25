/**
 * Global game configuration constants.
 */
export const CONFIG = {
  WORLD: {
    WIDTH: 10,
    HEIGHT: 18,
    BOTTOM: -9,
    TOP: 9,
  },

  HAND: {
    PALM_LANDMARKS: [0, 5, 9, 13, 17],
    REACH_MULTIPLIER: 1.35,
    CALIB_PADDING: 0.04,
    MIN_CALIB_SPAN: 0.1,
    SWIPE_SPEED_THRESHOLD: 0.75,
    MIRROR_X: true,
    SLICE_HIT_PADDING: 0.55,
    // Cursor follows hand speed — never moves faster than the hand
    MAX_CURSOR_SPEED: 18,
    MIN_CURSOR_SPEED: 5,
    SPEED_FOLLOW: 1.35,
  },

  SWORD: {
    RADIUS: 0.45,
    GLOW_COLOR: 0x8b5cf6,
    CORE_COLOR: 0x6366f1,
  },

  TRAIL: {
    MAX_POINTS: 32,
    MIN_SPEED: 0.75,
    FADE_TIME: 0.4,
    WIDTH: 0.65,
    COLOR: 0xa855f7,
  },

  PHYSICS: {
    GRAVITY: -10,
    SPAWN_INTERVAL_MIN: 1.1,
    SPAWN_INTERVAL_MAX: 1.7,
    LAUNCH_VY_MIN: 11,
    LAUNCH_VY_MAX: 15,
    LAUNCH_VX_RANGE: 3,
    ROTATION_SPEED: 3,
    SPAWN_X_MIN: -4.2,
    SPAWN_X_MAX: 2.8,
  },

    FRUITS: {
    apple: { radius: 0.55, color: 0xd62828, score: 10, juiceColor: 0xff3344 },
    orange: { radius: 0.5, color: 0xff8c1a, score: 15, juiceColor: 0xff9922 },
    banana: { radius: 0.45, color: 0xffd93d, score: 20, juiceColor: 0xffee88 },
    watermelon: { radius: 0.75, color: 0x2d6b2d, score: 25, juiceColor: 0xff2244 },
  },

  FRUIT_TYPES: ['apple', 'orange', 'banana', 'watermelon'],

  BOMB: {
    RADIUS: 0.5,
    SPAWN_CHANCE: 0.05,
    COLOR: 0x1a1a1a,
  },

  GAME: {
    INITIAL_LIVES: 5,
    COMBO_TIMEOUT: 1.5,
    COMBO_MULTIPLIER_STEP: 0.5,
    MAX_COMBO: 10,
    // Every SCORE_TIER points, fruits spawn faster
    SCORE_TIER: 100,
    SPAWN_FASTER_BY: 0.12,
    MIN_SPAWN_FACTOR: 0.35,
    FRUIT_SPEEDUP_BY: 0.06,
    MAX_FRUIT_SPEED_FACTOR: 1.6,
  },

  PARTICLES: {
    JUICE_DROPLETS: 22,
    JUICE_STREAKS: 8,
    JUICE_MIST: 10,
    JUICE_LIFETIME: 0.9,
    JUICE_SPEED: 5,
    BLAST_FLASH_TIME: 0.18,
    BLAST_FIRE: 18,
    BLAST_FIRE_LIFE: 0.55,
    BLAST_SMOKE: 14,
    BLAST_SMOKE_LIFE: 1.1,
    BLAST_SPARKS: 16,
    BLAST_SPARK_LIFE: 0.35,
    BLAST_DEBRIS: 10,
    BLAST_DEBRIS_LIFE: 0.85,
    BLAST_SPEED: 7,
  },

  MEDIAPIPE: {
    WASM_PATH: 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm',
    MODEL_PATH:
      'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
  },
};
