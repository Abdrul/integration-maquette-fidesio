import "./style.css";

const two = document.querySelector(".second-part-of-description-header");
const three = document.querySelector(".third-part-of-description-header");
const fourth = document.querySelector(".fourth-part-of-description-header");
const anim = document.querySelectorAll(".container-first-part");

two.addEventListener("mouseover", () => {
  anim[0].style.opacity = "0";
});

two.addEventListener("mouseout", () => {
  anim[0].style.opacity = "1";
});

three.addEventListener("mouseover", () => {
  anim[0].style.opacity = "0";
});

three.addEventListener("mouseout", () => {
  anim[0].style.opacity = "1";
});

fourth.addEventListener("mouseover", () => {
  anim[0].style.opacity = "0";
});

fourth.addEventListener("mouseout", () => {
  anim[0].style.opacity = "1";
});
