const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = document.querySelector("#ingredients");

let list = ingredients.map((item) => {
  const addElements = document.createElement("li");
  addElements.textContent = item;
  addElements.classList.add("item");
  return addElements;
});
elements.append(...list);
