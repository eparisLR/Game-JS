import { EventType } from "./Event.type.js";

export class TimerSubject {
  observers;

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
}
