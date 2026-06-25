import { SceneManager } from './scene/SceneManager.js';
import { HandTracker } from './hand/HandTracker.js';
import { Game } from './game/Game.js';
import { UIManager } from './ui/UIManager.js';
import { CameraPreview } from './ui/CameraPreview.js';
import { AudioManager } from './audio/AudioManager.js';

async function main() {
  const container = document.getElementById('game-container');
  const video = document.getElementById('webcam');
  const overlay = document.getElementById('webcam-overlay');
  const placeholder = document.getElementById('video-placeholder');
  const ui = new UIManager();
  const audio = new AudioManager();

  const sceneManager = new SceneManager(container);
  const handTracker = new HandTracker(video);
  const cameraPreview = new CameraPreview(video, overlay, placeholder);
  const game = new Game(sceneManager, handTracker, ui, audio);

  let lastTime = 0;

  function loop(timestamp) {
    requestAnimationFrame(loop);

    const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.05) : 0;
    lastTime = timestamp;

    handTracker.update(timestamp, dt);
    cameraPreview.draw(handTracker);

    if (game.running) {
      game.update(dt);
    } else if (game.hasActiveVisuals()) {
      game.updateVisuals(dt);
    } else if (!game.gameOver) {
      ui.updateHandStatus(handTracker.handDetected, handTracker.isSwiping);
    }

    sceneManager.render();
  }

  function beginRound() {
    audio.init();
    ui.hideGameOver();
    game.start();
  }

  try {
    await handTracker.init();
    cameraPreview.showVideo();
    beginRound();
  } catch (err) {
    ui.setLoading(`Camera error — allow access & reload`);
    ui.updateHandStatus(false, false, 'No camera');
    console.error(err);
  }

  ui.restartBtn.addEventListener('click', beginRound);
  requestAnimationFrame(loop);
}

main();
