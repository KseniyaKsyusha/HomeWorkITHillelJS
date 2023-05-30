const input = document.querySelector(".input");
const ghost = document.querySelector(".ghost");
ghost.setAttribute("style", "visibility: hidden");

const focusInput = (e) => {
  ghost.setAttribute("style", "visibility: visible");
};

const blurInput = (e) => {
  ghost.setAttribute("style", "visibility: hidden");
};

input.addEventListener("focus", focusInput);
input.addEventListener("blur", blurInput);
