// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну
// операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const listEl = document.querySelector('#ingredients');

  
  const createIngridientsEl = ingredient=>{
    const ingredientsList = document.createElement("li");
    ingredientsList.textContent = ingredient;
    return ingredientsList;
  };
  const createIngridientsList = ingredients.map(createIngridientsEl);
  
  listEl.append(...createIngridientsList);