const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlurCheckSymbolsQuantity);

const dataLength = inputRef.dataset.length;

function onBlurCheckSymbolsQuantity(event) {
  if (event.currentTarget.value.length == dataLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
