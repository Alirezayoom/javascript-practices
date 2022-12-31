"use strict";

//select elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//start conditions
let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  diceEl.classList.add("hidden");
}

init();

//rolling dice functioanility
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3.check for rolled 1, swith to next player
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
