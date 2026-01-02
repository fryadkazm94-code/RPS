"use strict";

// document.querySelector(".copyright").textContent = new Date().getFullYear();

const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const firstImage = document.querySelector(".first-image");
const secondImage = document.querySelector(".second-image");

// alternative text for rock: Rock
// alternative text for paper: paper
// alternative text for scissors: scissors
// alternative text for initial state: No choice selected yet

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
  result.style.color = "#D1FFD1";
};

const losing = () => {
  result.textContent = "You lost!";
  result.style.color = "#FF8F8F";
};

const draw = () => {
  result.style.color = "#ffffff";
  result.textContent = "It's a draw";
};

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
