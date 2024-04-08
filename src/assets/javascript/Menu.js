import { EventType } from "./Event.type.js";

export class Menu {
  update(event) {
    switch (event.event) {
      case EventType.LEVEL_COMPLETE:
        this.clearCharacters();
        this.displayLevelsButtons();
      case EventType.GAME_OVER:
        this.clearCharacters();
        this.displayLevelsButtons();
    }
  }

  displayLevelsButtons() {
    const playBtnList = document.getElementsByClassName("play-button");
    for (let btn of playBtnList) {
      btn.style.visibility = "visible";
    }
  }

  createLevelsButtons() {
    for (let i = 0; i < 100; i++) {
      let btn = document.createElement("button");
      btn.classList.add("play-button");
      btn.setAttribute("data-multiplier", i + 1);
      btn.setAttribute("type", "button");
      btn.innerText = `Niveau ${i + 1}`;
      document.body.appendChild(btn);
    }
  }

  hideLevelsButtons() {
    const playBtnList = document.getElementsByClassName("play-button");
    for (let btn of playBtnList) {
      btn.style.visibility = "hidden";
    }
  }

  clearCharacters() {
    const leftCharacters = document.querySelectorAll(".character");
    leftCharacters.forEach((el) => {
      document.body.removeChild(el);
    });
  }
}
