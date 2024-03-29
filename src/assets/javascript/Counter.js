import { EventType } from "./Event.type.js";

export class Counter {
  counter;
  counterElement = document.getElementById("counter");

  constructor() {
    this.counter = 0;
    this.displayCounter();
  }

  update(event) {
    if (event.event === EventType.CHARACTER_HITTED) {
      this.counter = this.counter + 1;
      this.displayCounter();
    }
  }

  displayCounter() {
    this.counterElement.innerText = this.counter;
  }
}
