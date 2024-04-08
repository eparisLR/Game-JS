import { Character } from "./Character.js";
import { Counter } from "./Counter.js";
import { CursorSubject } from "./CursorSubject.js";
import { Life } from "./Life.js";
import { Timer } from "./Timer.js";
import { Menu } from "./Menu.js";

const menu = new Menu();
menu.createLevelsButtons();

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
counter.subscribe(menu);

// Life subscriptions
life.subscribe(timer);
life.subscribe(menu);

for (let btn of playBtnList) {
  btn.addEventListener("click", () => {
    menu.hideLevelsButtons();
    document.body.classList.add("play-cursor");
    counter.setTarget(btn);

    timer.startSpawnTimer(btn);
    timer.startAnimationTimer(btn);
  });
}
