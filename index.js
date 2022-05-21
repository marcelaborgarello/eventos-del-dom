const main = () => {
  const red = document.querySelector(".red");
  document.addEventListener("keydown", (e) => {
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
  });
};

main();

//ArrowRight
//ArrowLeft
//ArrowUp
//ArrowDown

// document.onkeydown = function (e) {
//   alert(e.key);
// };
