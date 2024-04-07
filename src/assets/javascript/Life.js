import { EventType } from "./Event.type.js";
import { LifeSubject } from "./LifeSubject.js";

export class Life extends LifeSubject {
  lives;
  livesCounterElement = document.getElementById("life");

  constructor() {
    super();
    this.lives = 5;
    this.displayLife();
  }

  update(event) {
    if (event.event === EventType.LIFE_LOST) {
      this.lives = this.lives - 1;
      this.displayLife();
      if (life <= 0) {
        this.notify({ event: EventType.GAME_OVER });
      }
    }
  }

  displayLife() {
    this.livesCounterElement.innerText = this.lives;
  }
}
