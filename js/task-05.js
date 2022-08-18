const nameInput = document.querySelector("#name-input");
const nameOuput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputTyping);

function onInputTyping(event) {
  nameOuput.textContent =
    event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous";
}
