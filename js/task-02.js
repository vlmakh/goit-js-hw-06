const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");
// console.log(ingredientsListRef)

const items = ingredients.map((itemName) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = itemName;

  return ingredientItem;
});

// console.log(items)

ingredientsListRef.append(...items);
