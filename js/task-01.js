const categories = document.querySelectorAll(".item");
let numberOfCategories = `Number of categories:` + categories.length;
console.log(numberOfCategories);

categories.forEach((item) => {
  const categoryHeading = item.querySelector("h2");
  let showCategoryHeading = `Category: ` + categoryHeading.textContent;
  console.log(showCategoryHeading);

  const categoryElements = item.querySelectorAll("ul>li");
  let showCategoryElements = `Elements: ` + categoryElements.length;
  console.log(showCategoryElements);
});
