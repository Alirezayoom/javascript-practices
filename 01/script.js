"use strict";

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".theNumber").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const num = Number(document.querySelector(".numberInput").value);
  console.log(num);

  if (!num) {
    document.querySelector(".numberChecker").textContent = "⛔ no number";
  } else if (num === secretNumber) {
    document.querySelector(".numberChecker").textContent =
      "🔥 that is correct ";
  } else if (num > secretNumber) {
    if (score > 1) {
      document.querySelector(".numberChecker").textContent = "📈 too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".numberChecker").textContent = "Loser";
    }
  } else if (num < secretNumber) {
    if (score > 1) {
      document.querySelector(".numberChecker").textContent = "📉 too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".numberChecker").textContent = "Loser";
    }
  }
});
