// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку
//  Создать, после чего рендерится коллекция.
//   При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число. Функция создает столько div,
//  сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const number = document.querySelector('#controls input');
const createCollection = document.querySelector('[data-action = "render"]');
const removeCollection = document.querySelector('[data-action = "destroy"]');
const boxes = document.querySelector('#boxes');

removeCollection.addEventListener('click', destroyBoxes);

number.addEventListener('input',()=>{
    createCollection.addEventListener('click', createBoxes);
});

function createBoxes(amount){  
     amount = number.value;
    const elements = [];

    for(let i=0; i<amount;i+=1){
    const divEl = document.createElement('div');
    divEl.style.backgroundColor =  makeRandomRgbColor();
    divEl.style.width = `${30+(i*10)}px`;
    divEl.style.height = `${30+(i*10)}px`;
    divEl.style.boxSizing = 'content-box';
    elements.push(divEl);
    }
    boxes.append(...elements);
};

function makeRandomRgbColor() {
    const rgbNumber = () => Math.floor(Math.random() * 256);
    const r = rgbNumber(); 
    const g = rgbNumber();  
    const b = rgbNumber();
    return `rgb(${r}, ${g}, ${b})`;
}

function destroyBoxes(){
   number.value = '';
   boxes.innerHTML = '';
};