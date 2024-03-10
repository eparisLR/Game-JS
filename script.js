let animationTimer;
let spawnTimer;
let counter = 0;
let cursorPosition = { x: null, y: null, height: 100, width: 100 };
let life = 5;
const playBtn = document.getElementById("playBtn");
const characterAvailable = ["elephant", "koala", "lion", "loup", "panda"];

function startAnimationTimer() {
  if (!animationTimer) {
    animationTimer = setInterval(animateCharacter, 5);
  }
}

function startSpawnTimer() {
  if (!spawnTimer) {
    spawnTimer = setInterval(createCharacter, 1000);
  }
}

function stopSpawnTimer() {
  clearInterval(spawnTimer);
  spawnTimer = null;
}

function stopAnimationTimer() {
  clearInterval(animationTimer);
  animationTimer = null;
}

function isCollide(animatedElement) {
  if (cursorPosition.x > 0 && cursorPosition.y > 0) {
    return !(
      cursorPosition.y < animatedElement.y ||
      cursorPosition.y > animatedElement.y + animatedElement.height ||
      cursorPosition.x < animatedElement.x ||
      cursorPosition.x > animatedElement.x + animatedElement.width
    );
  }
  return false;
}

function setCursorPosition(event) {
  cursorPosition.x = event.clientX;
  cursorPosition.y = event.clientY;
}

function createCharacter() {
  const characterHTML = document.createElement("div");
  characterHTML.classList.add(
    "character",
    characterAvailable[Math.floor(Math.random() * characterAvailable.length)]
  );
  characterHTML.style.top = "1px";
  characterHTML.style.left = `${Math.floor(
    Math.random() * (window.screen.width - 300)
  )}px`;
  document.body.appendChild(characterHTML);
}

function animateCharacter() {
  if (life !== 0) {
    const characters = document.getElementsByClassName("character");
    for (let element of characters) {
      element.style.top = `${parseInt(element.style.top, 10) + 1}px`;
      if (isCollide(element.getBoundingClientRect())) {
        document.body.removeChild(element);
        counter++;
        document.getElementById(
          "counter"
        ).innerText = `Connards mis en cage : ${counter}`;
      }
      if (
        element.getBoundingClientRect().y >
        window.visualViewport.height - 190
      ) {
        document.body.removeChild(element);
        life--;
        document.getElementById("life").innerText = `Vies restantes: ${life}`;
      }
    }
  } else {
    stopSpawnTimer();
    stopAnimationTimer();
    const characters = document.getElementsByClassName("character");
    playBtn.style.visibility = "visible";
    document.body.classList.remove("play-cursor");
    for (let element of characters) {
      document.body.removeChild(element);
    }
  }
}

document.addEventListener("mousemove", (event) => {
  setCursorPosition(event);
});

playBtn.addEventListener("click", () => {
  playBtn.style.visibility = "hidden";
  document.body.classList.add("play-cursor");
  createCharacter();
  startAnimationTimer();
  startSpawnTimer();
  console.log("click");
});
