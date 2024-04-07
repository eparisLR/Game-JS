import { CounterSubject } from "./CounterSubject.js";
import { EventType } from "./Event.type.js";

export class Counter extends CounterSubject {
  minimum = 20;
  target = this.minimum;
  counter;
  counterElement = document.getElementById("counter");

  constructor() {
    super();
    this.counter = 0;
    this.displayCounter();
  }

  update(event) {
    if (event.event === EventType.CHARACTER_HITTED) {
      this.counter = this.counter + 1;
      this.displayCounter();
      if (this.counter >= this.target) {
        this.notify({ event: EventType.LEVEL_COMPLETE });
      }
    }
  }

  displayCounter() {
    this.counterElement.innerText = this.counter;
  }

  setTarget(levelClicked) {
    this.target = Number(levelClicked.dataset.multiplier) * this.minimum;
  }
}
