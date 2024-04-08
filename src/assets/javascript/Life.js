import { EventType } from "./Event.type.js";
import { LifeSubject } from "./LifeSubject.js";

export class Life extends LifeSubject {
  lives;
  livesCounterElement = document.getElementById("life");

  constructor() {
    super();
    this.lives = 5;
  }

  update(event) {
    if (event.event === EventType.LIFE_LOST) {
      this.lives = this.lives - 1;
      this.displayLife();
      if (this.lives <= 0) {
        this.notify({ event: EventType.GAME_OVER });
        this.clearLife();
      }
    }
  }

  displayLife() {
    this.livesCounterElement.innerText = this.lives;
  }

  clearLife() {
    this.livesCounterElement.innerText = "";
    this.lives = 5;
  }
}
