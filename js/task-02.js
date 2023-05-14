const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  // 'Mutton',
];

const ingredientsListEL = document.getElementById('ingredients');

const foodstuffs = ingredients.map(food => {
  const itemEl = document.createElement('li');
  itemEl.textContent = food;
  itemEl.classList.add('item');
  return itemEl;
});

ingredientsListEL.append(...foodstuffs);
