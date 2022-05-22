const keyboardEvent = (e) => {
  const cuadro = document.querySelector(".cuadro");

  let marginString = cuadro.style.marginLeft.replace("px", "");
  let marginNumber = parseInt(marginString || "0");
  let newMarginLeft = marginNumber;

  if (e.key === "ArrowRight" && newMarginLeft <= document.body.clientWidth) {
    newMarginLeft += 10;
  }
  if (e.key === "ArrowLeft" && newMarginLeft > 0) {
    newMarginLeft -= 10;
  }

  if (e.key === "ArrowLeft" && marginNumber <= 0) {
    alert("No puedes moverlo a la izquierda. Supera el límite");
  }

  if (
    e.key === "ArrowRight" &&
    newMarginLeft >= document.body.clientWidth - 100
  ) {
    console.log(document.body.clientWidth);
    alert("No puedes moverlo a la derecha. Supera el límite");
  }

  if (e.key === "Escape") {
    newMarginLeft = 0;
  }

  cuadro.style.marginLeft = newMarginLeft + "px";
};

const eventCLick = (e) => {
  const cuadro = document.querySelector(".cuadro");

  let marginString = cuadro.style.marginLeft.replace("px", "");
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

  cuadro.style.marginLeft = newMarginLeft + "px";
};

const eventCLickColor = (e) => {
  const divRojo = document.querySelector(".cuadro");

  if (e.target.classList[0] === "rojo") {
    divRojo.style.backgroundColor = "red";
  }

  if (e.target.classList[0] === "azul") {
    divRojo.style.backgroundColor = "blue";
  }

  if (e.target.classList[0] === "verde") {
    divRojo.style.backgroundColor = "green";
  }

  if (e.target.classList[0] === "amarillo") {
    divRojo.style.backgroundColor = "yellow";
  }

  if (e.target.classList[0] === "violeta") {
    divRojo.style.backgroundColor = "purple";
  }

  if (e.target.classList[0] === "negro") {
    divRojo.style.backgroundColor = "black";
  }
};

const main = () => {
  document.addEventListener("keydown", keyboardEvent);
  document.addEventListener("click", eventCLick);
  document.addEventListener("click", eventCLickColor);
};

main();

//ArrowRight
//ArrowLeft
//ArrowUp
//ArrowDown

// document.onkeydown = function (e) {
//   alert(e.key);
// };
