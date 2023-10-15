const categoriesList = document.getElementById('categories');
const categoriesItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach((item) =>{
const categorieTitle = item.querySelector('h2').textContent;

const categorieElements = item.querySelectorAll('li').length
console.log(`Category: ${categorieTitle}`);
console.log(`Elements: ${categorieElements}`);}
)