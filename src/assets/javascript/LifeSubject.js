export class LifeSubject {
  observers;

  constructor() {
    this.observers = [];
  }

  subscribe(object) {
    this.observers.push(object);
  }

  unsubscribe(object) {
    this.observers.filter((observer) => observer !== object);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
