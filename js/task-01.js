const ulRef = document.querySelector("#categories");
console.log(`Number of categories: ${ulRef.childElementCount}`);

const firstItemRef = ulRef.firstElementChild;
console.log(`Category: ${firstItemRef.firstElementChild.textContent}`);
console.log(`Elements: ${firstItemRef.lastElementChild.childElementCount}`);

const secondItemRef = ulRef.children[1];
console.log(`Category: ${secondItemRef.firstElementChild.textContent}`);
console.log(`Elements: ${secondItemRef.lastElementChild.childElementCount}`);

const thirdItemRef = ulRef.children[2];
console.log(`Category: ${thirdItemRef.firstElementChild.textContent}`);
console.log(`Elements: ${thirdItemRef.lastElementChild.childElementCount}`);
