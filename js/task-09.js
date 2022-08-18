const spanColorRef = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onClickBtn);

function onClickBtn(event) {
  const newColor = getRandomHexColor();

  spanColorRef.textContent = `${newColor}`;

  document.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
