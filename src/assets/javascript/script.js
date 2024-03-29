import { Character } from "./Character.js";
import { Counter } from "./Counter.js";
import { CursorSubject } from "./CursorSubject.js";
import { TimerSubject } from "./TimerSubject.js";
import { Life } from "./Life.js";

const playBtn = document.getElementById("playBtn");
const timer = new TimerSubject();
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

playBtn.addEventListener("click", () => {
  playBtn.style.visibility = "hidden";
  document.body.classList.add("play-cursor");

  timer.startSpawnTimer();
  timer.startAnimationTimer();
});
