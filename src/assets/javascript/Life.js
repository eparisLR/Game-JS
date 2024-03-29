import { EventType } from "./Event.type.js";

export class Life {
  lives;
  livesCounterElement = document.getElementById("life");

  constructor() {
    this.lives = 5;
    this.displayLife();
  }

  update(event) {
    if (event.event === EventType.LIFE_LOST) {
      this.lives = this.lives - 1;
      this.displayLife();
    }
  }

  displayLife() {
    this.livesCounterElement.innerText = this.lives;
  }
}
