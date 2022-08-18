const divControlsRef = document.querySelector("#controls");
const inputRef = divControlsRef.querySelector("input");
const createBtn = divControlsRef.querySelector("[data-create");
const destroyBtn = divControlsRef.querySelector("[data-destroy");
const divBoxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);

function onCreateBtn(event) {
  if (inputRef.value < 0 || inputRef.value > 100) {
    inputRef.value = 0;
    return alert("Число должно быть от 1 дл 100");
  }

  createBoxes(inputRef.value);
}

function createBoxes(amount) {
  let items = "";

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    const width = 30 + (i - 1) * 10;
    div.style.width = `${width}px`;
    div.style.height = div.style.width;
    div.style.backgroundColor = `${getRandomHexColor()}`;

    items = items + div.outerHTML;
  }

  divBoxesRef.insertAdjacentHTML("afterbegin", items);
  console.dir(divBoxesRef);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onDestroyBtn() {
  const number = divBoxesRef.children.length;

  for (let i = number - 1; i >= 0; i -= 1) {
    divBoxesRef.children[i].remove();
  }

  inputRef.value = 0;
}
