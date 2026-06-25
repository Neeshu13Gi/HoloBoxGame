/**
 * UIManager — HUD, game over, hand status.
 */
export class UIManager {
  constructor() {
    this.scoreEl = document.getElementById('score');
    this.livesEl = document.getElementById('lives');
    this.comboEl = document.getElementById('combo');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.finalScoreEl = document.getElementById('final-score');
    this.gameOverReasonEl = document.getElementById('game-over-reason');
    this.loadingText = document.getElementById('loading-text');
    this.restartBtn = document.getElementById('restart-btn');
    this.handStatus = document.getElementById('hand-status');
    this.handStatusText = document.getElementById('hand-status-text');
    this._lastHandState = { detected: false, swiping: false };
  }

  setLoading(text) {
    if (this.loadingText) this.loadingText.textContent = text;
  }

  hideGameOver() {
    this.gameOverScreen.classList.add('hidden');
  }

  showGameOver(score, reason) {
    this.finalScoreEl.textContent = score;
    this.gameOverReasonEl.textContent = reason;
    this.gameOverScreen.classList.remove('hidden');
  }

  updateScore(score) {
    this.scoreEl.textContent = score;
  }

  updateLives(lives) {
    this.livesEl.textContent = '❤️'.repeat(Math.max(0, lives));
  }

  updateCombo(combo) {
    this.comboEl.textContent = `x${combo}`;
    this.comboEl.classList.remove('combo-bump');
    void this.comboEl.offsetWidth;
    this.comboEl.classList.add('combo-bump');
  }

  updateHandStatus(detected, swiping, customText) {
    if (!customText
      && detected === this._lastHandState.detected
      && swiping === this._lastHandState.swiping) {
      return;
    }
    if (!customText) {
      this._lastHandState = { detected, swiping };
    }

    this.handStatus.classList.toggle('detected', detected);
    this.handStatus.classList.toggle('swiping', swiping);

    if (customText) {
      this.handStatusText.textContent = customText;
    } else if (!detected) {
      this.handStatusText.textContent = 'Show hand';
    } else if (swiping) {
      this.handStatusText.textContent = 'Slicing!';
    } else {
      this.handStatusText.textContent = 'Move hand';
    }
  }
}
