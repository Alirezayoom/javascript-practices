"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const btn = document.querySelectorAll(".btn");

function show() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function hide() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", show);
}
close.addEventListener("click", hide);
overlay.addEventListener("click", hide);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    hide();
  }
});
