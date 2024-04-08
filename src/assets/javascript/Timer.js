import { TimerSubject } from "./TimerSubject.js";
import { EventType } from "./Event.type.js";

export class Timer extends TimerSubject {
  animationTimer;
  spawnTimer;
  update(event) {
    console.log(event);
    this.stopAnimationTimer();
    this.stopSpawnTimer();
  }

  startAnimationTimer(levelClicked) {
    if (!this.animationTimer) {
      this.animationTimer = setInterval(
        () => this.notify({ event: EventType.ANIMATION }),
        5 / Number(levelClicked.dataset.multiplier) / 1000
      );
    }
  }

  startSpawnTimer(levelClicked) {
    if (!this.spawnTimer) {
      this.spawnTimer = setInterval(
        () => this.notify({ event: EventType.SPAWN }),
        1000 / Number(levelClicked.dataset.multiplier)
      );
    }
  }

  stopSpawnTimer() {
    clearInterval(this.spawnTimer);
    this.spawnTimer = null;
  }

  stopAnimationTimer() {
    clearInterval(this.animationTimer);
    this.animationTimer = null;
  }
}
