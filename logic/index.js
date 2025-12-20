"use strict";

document.querySelector(".copyright").textContent = new Date().getFullYear();

// selecting the button that actually starts the game(changes the images)
const play = document.querySelector(".play");

// selecting the result area(the area that will display the winner and looser)
const result = document.querySelector(".result");

// selecting both images
const firstImage = document.querySelector(".first-image");
const secondImage = document.querySelector(".second-image");

const images = [
  "../images/rock.webp",
  "../images/paper.webp",
  "../images/scissor.webp",
];

play.addEventListener("click", function () {
  const userRandomNumber = Math.trunc(Math.random() * images.length);
  const computerRandomNumber = Math.trunc(Math.random() * images.length);

  firstImage.src = images[userRandomNumber];
  secondImage.src = images[computerRandomNumber];
});
