"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (guess === secretNumber) {
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector("body").style.backgroundColor = "#3F704D";
    document.querySelector(".number").style.width = "240px";
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "Too low!" : "Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("You lose!");
    }
  } else if (guess === 0) {
    displayMessage("No Number!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  console.log("alo");
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start Guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "150px";
  document.querySelector("body").style.backgroundColor =
    "rgb(" + 73 + ", " + 63 + ", " + 63 + ")";
});
