import { CharacterSubject } from "./CharacterSubject.js";
import { EventType } from "./Event.type.js";

export class Character extends CharacterSubject {
  characterAvailable = ["elephant", "koala", "lion", "loup", "panda"];
  characters = [];
  constructor() {
    super();
    this.characters = [];
  }

  update(event) {
    switch (event.event) {
      case EventType.ANIMATION:
        this.animate();
        break;

      case EventType.SPAWN:
        this.spawn();
        break;

      case EventType.MOUSE_MOVE:
        this.isCollide(event.data);
        break;
    }
  }

  animate() {
    this.characters.forEach((element) => {
      element.style.top = `${parseInt(element.style.top, 10) + 1}px`;
      if (
        element.getBoundingClientRect().y >
        window.visualViewport.height - 190
      ) {
        document.body.removeChild(element);
        this.notify({ event: EventType.LIFE_LOST });
      }
    });
  }

  spawn() {
    const currentCharactersSpawned = document.querySelectorAll(".character");
    if (currentCharactersSpawned.length < 7) {
      const characterHTML = document.createElement("div");
      const randomSkin = Math.floor(
        Math.random() * this.characterAvailable.length
      );
      const randomPosition = Math.floor(
        Math.random() * (window.screen.width - 300)
      ).toString();
      characterHTML.classList.add(
        "character",
        this.characterAvailable[randomSkin]
      );
      characterHTML.style.top = "1px";
      characterHTML.style.left = randomPosition + "px";
      this.characters.push(characterHTML);
      document.body.appendChild(characterHTML);
    }
  }

  isCollide(cursorPosition) {
    this.characters.forEach((element) => {
      const animatedElement = element.getBoundingClientRect();
      let isInCollision = false;
      if (cursorPosition.x > 0 && cursorPosition.y > 0) {
        isInCollision = !(
          cursorPosition.y < animatedElement.y ||
          cursorPosition.y > animatedElement.y + animatedElement.height ||
          cursorPosition.x < animatedElement.x ||
          cursorPosition.x > animatedElement.x + animatedElement.width
        );
      }
      if (isInCollision) {
        document.body.removeChild(element);
        this.notify({ event: EventType.CHARACTER_HITTED, data: element });
      }
    });
  }
}
