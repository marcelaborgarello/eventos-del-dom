const keyboardEvent = (e) => {
  const red = document.querySelector(".red");

  let marginString = red.style.marginLeft.replace("px", "");
  let marginNumber = parseInt(marginString || "0");
  let newMarginLeft = marginNumber;

  if (
    e.key === "ArrowRight" &&
    newMarginLeft + 130 <= document.body.clientWidth
  ) {
    newMarginLeft += 10;
  }
  if (e.key === "ArrowLeft" && newMarginLeft > 0) {
    newMarginLeft -= 10;
  }

  if (e.key === "Escape") {
    newMarginLeft = 0;
  }

  red.style.marginLeft = newMarginLeft + "px";
};

const eventCLick = (e) => {
  const red = document.querySelector(".red");

  let marginString = red.style.marginLeft.replace("px", "");
  let marginNumber = parseInt(marginString || "0");
  let newMarginLeft = marginNumber;

  if (
    e.target.classList[0] === "fi" &&
    e.target.classList[1] === "fi-bs-angle-right" &&
    newMarginLeft + 130 <= document.body.clientWidth
  ) {
    newMarginLeft += 10;
  }
  if (
    e.target.classList[0] === "fi" &&
    e.target.classList[1] === "fi-bs-angle-left" &&
    newMarginLeft > 0
  ) {
    newMarginLeft -= 10;
  }

  if (e.target.classList[0] === "code") {
    newMarginLeft = 0;
  }

  red.style.marginLeft = newMarginLeft + "px";
};

const main = () => {
  document.addEventListener("click", eventCLick);
  document.addEventListener("keydown", keyboardEvent);
};

main();

//ArrowRight
//ArrowLeft
//ArrowUp
//ArrowDown

// document.onkeydown = function (e) {
//   alert(e.key);
// };
