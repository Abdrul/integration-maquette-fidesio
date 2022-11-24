import "./style.css";

const firstPartHeader = document.querySelector(
  ".first-part-of-description-header"
);
const secondPartHeader = document.querySelector(
  ".second-part-of-description-header"
);
const thirdPartHeader = document.querySelector(
  ".third-part-of-description-header"
);
const fourthPartHeader = document.querySelector(
  ".fourth-part-of-description-header"
);

secondPartHeader.addEventListener("mouseover", () => {
  firstPartHeader.style.zIndex = "-5";

  secondPartHeader.style.zIndex = "100";
});

secondPartHeader.addEventListener("mouseout", () => {
  firstPartHeader.style.zIndex = "50";

  secondPartHeader.style.zIndex = "40";
});

thirdPartHeader.addEventListener("mouseover", () => {
  firstPartHeader.style.zIndex = "-5";
  secondPartHeader.style.zIndex = "-6";
  thirdPartHeader.style.zIndex = "100";
});

thirdPartHeader.addEventListener("mouseout", () => {
  firstPartHeader.style.zIndex = "50";
  secondPartHeader.style.zIndex = "40";
  thirdPartHeader.style.zIndex = "30";
});

fourthPartHeader.addEventListener("mouseover", () => {
  firstPartHeader.style.zIndex = "-1";
  secondPartHeader.style.zIndex = "-2";
  thirdPartHeader.style.zIndex = "-3";
  fourthPartHeader.style.zIndex = "100";
});

fourthPartHeader.addEventListener("mouseout", () => {
  firstPartHeader.style.zIndex = "50";
  secondPartHeader.style.zIndex = "40";
  thirdPartHeader.style.zIndex = "30";
  fourthPartHeader.style.zIndex = "20";
});
