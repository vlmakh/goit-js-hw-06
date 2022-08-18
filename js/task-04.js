const divRef = document.querySelector("#counter");
const resultSpan = divRef.querySelector("#value");

const decreaseBtn = divRef.querySelector('[data-action="decrement"]');
const increaseBtn = divRef.querySelector('[data-action="increment"]');

let counterValue = 0;
resultSpan.textContent = counterValue;

decreaseBtn.addEventListener("click", () => {
  counterValue -= 1;
  resultSpan.textContent = counterValue;
});

increaseBtn.addEventListener("click", () => {
  counterValue += 1;
  resultSpan.textContent = counterValue;
});
