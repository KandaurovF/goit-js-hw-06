const listEl = document.getElementById('categories');
console.log('Number of categories:', listEl.children.length);

const categoriesArr = document.querySelectorAll('.item');

const getCategoriesInfo = categoriesArr.forEach(item => {
  const titleEL = item.querySelector('h2');
  const categoryListEL = item.querySelector('ul');

  console.log('Category :', titleEL.textContent);
  console.log('Elements :', categoryListEL.children.length);
});
