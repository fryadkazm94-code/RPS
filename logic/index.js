"use strict";

document.querySelector(".copyright").textContent = new Date().getFullYear();

const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const firstImage = document.querySelector(".first-image");
const secondImage = document.querySelector(".second-image");

const images = [
  "/images/rock.webp",
  "/images/paper.webp",
  "/images/scissor.webp",
];

const wining = () => {
  result.style.color = "#D1FFD1";
  result.textContent = "You won!";
};

const loosing = () => {
  result.style.color = "#FF8F8F";
  result.textContent = "You lost!";
};

const draw = () => {
  result.style.color = "#ffffff";
  result.textContent = "It's a draw";
};

const reset = () => {
  result.textContent = "?";
  result.style.color = "#ffffff";
  secondImage.src = "/images/paper.webp";
  firstImage.src = "/images/scissor.webp";
};

resetBtn.addEventListener("click", reset);

// when the user clicks the (rock) button let the user number be 0, and when he/she clicks the paper button
// let the number 1, and when he/she clicks the scissor button let the number be 2
// now, each number is corresponding to an image
let userChoice;

const rockHandler = () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  userChoice = 0;

  firstImage.src = images[userChoice];
  secondImage.src = images[computerChoice];

  if (computerChoice != userChoice) {
    if (userChoice < 1 && computerChoice != 1) {
      wining();
    } else {
      loosing();
    }
  } else {
    draw();
  }
};

const paperHandler = () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  userChoice = 1;

  firstImage.src = images[userChoice];
  secondImage.src = images[computerChoice];

  if (computerChoice != userChoice) {
    if (userChoice > 0 && computerChoice != 2) {
      wining();
    } else {
      loosing();
    }
  } else {
    draw();
  }
};

const scissorsHandler = () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  userChoice = 2;

  firstImage.src = images[userChoice];
  secondImage.src = images[computerChoice];

  if (computerChoice != userChoice) {
    if (userChoice && computerChoice != 0) {
      wining();
    } else {
      loosing();
    }
  } else {
    draw();
  }
};

rockBtn.addEventListener("click", rockHandler);
paperBtn.addEventListener("click", paperHandler);
scissorsBtn.addEventListener("click", scissorsHandler);
