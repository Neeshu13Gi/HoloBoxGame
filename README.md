# Fruit Ninja — Hand Tracking

A browser-based Fruit Ninja-style game controlled with your webcam and hand gestures. Built with **Three.js** and **MediaPipe Hand Landmarker**.

## Requirements

- [Node.js](https://nodejs.org/) 18+
- A webcam
- Chrome or Edge (recommended)

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Vite opens **http://localhost:3000** in your browser.

## How to play

1. Allow camera access when prompted.
2. Click **Start Game**.
3. Hold your hand in front of the webcam.
4. **Swipe quickly** with your index finger to slice fruits.
5. Avoid slicing **bombs** — they end the game instantly.
6. Don't let fruits fall off the screen (you lose a life).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.js              # Entry point
├── config.js            # Game tuning constants
├── hand/HandTracker.js  # MediaPipe integration
├── scene/SceneManager.js
├── game/                # Fruit, Bomb, Sword, Game loop
├── audio/AudioManager.js
├── ui/UIManager.js
└── utils/collision.js
```
