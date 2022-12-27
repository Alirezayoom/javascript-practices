"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".numberChecker").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const num = Number(document.querySelector(".numberInput").value);

  if (!num) {
    displayMessage("⛔ no number");
  } else if (num === secretNumber) {
    displayMessage("🔥 that is correct ");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".theNumber").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (num !== secretNumber) {
    if (score > 1) {
      displayMessage(num > secretNumber ? "📈 too high" : "📉 too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Loser");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".theNumber").textContent = "?";
  document.querySelector(".numberInput").value = "";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
});
