"use strict";

// document.querySelector(".copyright").textContent = new Date().getFullYear();
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const title = document.querySelector(".title");

const rockBtn = document.querySelector(".rock");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const firstImage = document.querySelector(".first-image");
const darkModeButton = document.querySelector(".dark-mode");
const secondImage = document.querySelector(".second-image");
const darkModeButtonContent = document.querySelector(".dark-light-content");

// alternative text for rock: Rock
// alternative text for paper: paper
// alternative text for scissors: scissors
// alternative text for initial state: No choice selected yet

// tailored to the dark mode effect
darkModeButton.addEventListener("click", toDark);

function toDark() {
  if (sun.classList.contains("invisible")) {
    dark();
  } else {
    light();
  }
}
//

const images = [
  "images/rock.webp",
  "images/paper.webp",
  "images/scissor.webp",
  "images/initial.webp",
];

const alternatives = {
  0: "Rock",
  1: "Paper",
  2: "Scissors",
  3: "No choice selected yet",
};

const winning = () => {
  result.textContent = "You won!";
  result.style.color = "#7bed9f";
};

const losing = () => {
  result.textContent = "You lost!";
  result.style.color = "#ff6b6b";
};

const draw = () => {
  result.style.color = "#ffffff";
  result.textContent = "It's a draw";
};

function dark() {
  sun.style.stroke = "#92400e";
  moon.classList.add("invisible");
  sun.classList.remove("invisible");
  darkModeButton.style.color = "#78350f";
  darkModeButtonContent.textContent = "Light Mode";
  darkModeButton.style.backgroundColor = "#fde68a";

  document.querySelector(".scissor").style.fill = "#e0e0e0";
  document.querySelector(".game-name").style.color = "#e0e0e0";
  document.querySelector("body").style.backgroundColor = "#121212";

  document.querySelectorAll(".players").forEach((element) => {
    element.style.color = "#e0e0e0";
  });

  document.querySelectorAll(".image-container").forEach((element) => {
    element.style.boxShadow = "none";
  });

  document.querySelectorAll(".button").forEach((btn) => {
    btn.style.background = "#334155";
    btn.style.color = "#f1f5f9";
  });

  resetBtn.style.color = "#e0e0e0";
  resetBtn.style.boxShadow = "inset 0 0 0 2px #e0e0e0";

  document.querySelector(".main-header").style.backgroundImage =
    "linear-gradient(to right, #8e9eab, #eef2f3)";

  result.style.backgroundColor = "#334155";
  result.style.color = "#f1f5f9";
  document.querySelectorAll(".to-top-icon").forEach((element) => {
    element.style.color = "#e0e0e0";
  });
}

function light() {
  sun.classList.add("invisible");
  sun.style.stroke = "#e2e8f0";
  moon.classList.remove("invisible");
  darkModeButton.style.color = "#f1f5f9";
  darkModeButtonContent.textContent = "Dark Mode";
  darkModeButton.style.backgroundColor = "#1e293b";

  document.querySelector(".scissor").style.fill = "#2d3436";
  document.querySelector(".game-name").style.color = "#2d3436";
  document.querySelector("body").style.backgroundColor = "#b9c4d1";

  document.querySelectorAll(".players").forEach((element) => {
    element.style.color = "#2d3436";
  });

  document.querySelectorAll(".button").forEach((btn) => {
    btn.style.background = "linear-gradient(145deg, #0984e3, #74b9ff)";
    btn.style.color = "#dfe6e9";
  });

  resetBtn.style.color = "#2d3436";
  resetBtn.style.boxShadow = "inset 0 0 0 2px #2d3436";

  document.querySelector(".main-header").style.backgroundImage =
    "linear-gradient(to right, #0984e3, #e17055)";

  result.style.backgroundColor = "#535c68";
  result.style.color = "#f1f2f6";
}

const reset = () => {
  result.textContent = "?";
  result.style.color = "#ffffff";
  firstImage.alt = alternatives["3"];
  secondImage.alt = alternatives["3"];
  firstImage.src = "images/initial.webp";
  secondImage.src = "images/initial.webp";
};

resetBtn.addEventListener("click", reset);

// when the user clicks the (rock) button let the user number be 0, and when he/she clicks the paper button
// let the number 1, and when he/she clicks the scissor button let the number be 2
// now, each number is corresponding to an image
let userChoice;

const rockHandler = () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  userChoice = 0;

  firstImage.alt = "Rock";
  secondImage.alt = alternatives[computerChoice];

  firstImage.src = images[userChoice];
  secondImage.src = images[computerChoice];

  if (computerChoice != userChoice) {
    if (userChoice < 1 && computerChoice != 1) {
      winning();
    } else {
      losing();
    }
  } else {
    draw();
  }
};

const paperHandler = () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  userChoice = 1;

  firstImage.alt = "Paper";
  secondImage.alt = alternatives[computerChoice];

  firstImage.src = images[userChoice];
  secondImage.src = images[computerChoice];

  if (computerChoice != userChoice) {
    if (userChoice > 0 && computerChoice != 2) {
      winning();
    } else {
      losing();
    }
  } else {
    draw();
  }
};

const scissorsHandler = () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  userChoice = 2;

  firstImage.alt = "Scissors";
  secondImage.alt = alternatives[computerChoice];

  firstImage.src = images[userChoice];
  secondImage.src = images[computerChoice];

  if (computerChoice != userChoice) {
    if (computerChoice != 0) {
      winning();
    } else {
      losing();
    }
  } else {
    draw();
  }
};

rockBtn.addEventListener("click", rockHandler);
paperBtn.addEventListener("click", paperHandler);
scissorsBtn.addEventListener("click", scissorsHandler);
