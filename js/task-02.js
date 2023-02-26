const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = document.querySelector("#ingredients");
ingredients.map((item) => {
  const addElements = document.createElement("li");
  addElements.textContent = item;
  addElements.classList.add("item");
  elements.append(addElements);
});

console.log(ingredients.children);