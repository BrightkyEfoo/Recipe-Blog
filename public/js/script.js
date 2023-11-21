const ingredientList = document.querySelector(".ingredient-list");
const [addButton, removeButton] = document.querySelectorAll("button");
const inputIngredient = ingredientList.querySelector("input");

console.log(addButton, removeButton);

addButton.addEventListener("click", () => {
  const newInput = inputIngredient.cloneNode();
  console.log(newInput);
  newInput.value = "";
  ingredientList.appendChild(newInput);
});

removeButton.addEventListener("click", () => {
  ingredientList.removeChild(
    ingredientList.children[ingredientList.children.length - 1]
  );
});
