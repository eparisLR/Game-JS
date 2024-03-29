import { EventType } from "./Event.type.js";

export class TimerSubject {
  observers;
  animationTimer;
  spawnTimer;

  constructor() {
    this.observers = [];
  }

  subscribe(object) {
    this.observers.push(object);
  }

  unsubscribe(object) {
    this.observers = this.observers.filter((observer) => observer !== object);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }

  startAnimationTimer() {
    if (!this.animationTimer) {
      this.animationTimer = setInterval(
        () => this.notify({ event: EventType.ANIMATION }),
        5
      );
    }
  }

  startSpawnTimer() {
    if (!this.spawnTimer) {
      this.spawnTimer = setInterval(
        () => this.notify({ event: EventType.SPAWN }),
        1000
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
