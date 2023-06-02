const img = document.querySelector("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const cats = [
  "./img/cat1.jpg",
  "./img/cat2.jpg",
  "./img/cat3.jpg",
  "./img/cat4.jpg",
  "./img/cat5.jpg",
  "./img/cat6.jpg",
];

const handlePrev = () => {
  next.style.visibility = "visible";
  const i = cats.findIndex((cats) => cats === img.getAttribute("src"));
  if (i > 0) {
    img.setAttribute("src", cats[i - 1]);
    img.setAttribute("alt", `cat${i}`);
  } else {
    prev.style.visibility = "hidden";
  }
};

const handleNext = () => {
  prev.style.visibility = "visible";
  const i = cats.findIndex((cats) => cats === img.getAttribute("src"));

  if (i + 1 < cats.length) {
    img.setAttribute("src", cats[i + 1]);
    img.setAttribute("alt", `cat${i + 2}`);
  } else {
    next.style.visibility = "hidden";
  }
};

prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);