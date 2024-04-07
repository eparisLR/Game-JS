import { Character } from "./Character.js";
import { Counter } from "./Counter.js";
import { CursorSubject } from "./CursorSubject.js";
import { Life } from "./Life.js";
import { Timer } from "./Timer.js";

const generateLevels = () => {
  for (let i = 0; i < 100; i++) {
    let btn = document.createElement("button");
    btn.classList.add("play-button");
    btn.setAttribute("data-multiplier", i + 1);
    btn.setAttribute("type", "button");
    btn.innerText = `Niveau ${i + 1}`;
    document.body.appendChild(btn);
  }
};

const hidePlayButtons = () => {
  const playBtnList = document.getElementsByClassName("play-button");
  for (let btn of playBtnList) {
    btn.style.visibility = "hidden";
  }
};

generateLevels();

const playBtnList = document.getElementsByClassName("play-button");
const timer = new Timer();
const cursorSubject = new CursorSubject();
const character = new Character();
const counter = new Counter();
const life = new Life();

// Timer subscriptions
timer.subscribe(character);

// Cursor subscriptions
cursorSubject.subscribe(character);

// Character subscriptions
character.subscribe(counter);
character.subscribe(life);

// Counter subscriptions
counter.subscribe(timer);

// Life subscriptions
life.subscribe(timer);

for (let btn of playBtnList) {
  btn.addEventListener("click", () => {
    hidePlayButtons();
    document.body.classList.add("play-cursor");
    counter.setTarget(btn);

    timer.startSpawnTimer(btn);
    timer.startAnimationTimer(btn);
  });
}
