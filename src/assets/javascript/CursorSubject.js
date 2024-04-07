import { EventType } from "./Event.type.js";

export class CursorSubject {
  observers;
  cursorPosition;

  constructor() {
    this.observers = [];
    this.cursorPosition = { x: 0, y: 0 };
    document.addEventListener("mousemove", (event) => {
      this.setCursorPosition(event);
      this.notify({ event: EventType.MOUSE_MOVE, data: this.cursorPosition });
    });
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

  setCursorPosition(event) {
    this.cursorPosition.x = event.clientX;
    this.cursorPosition.y = event.clientY;
  }
}
