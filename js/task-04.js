// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление 



// const counterValue = document.querySelector('#value');
// const buttons = document.querySelectorAll('#counter button');

// counterValue.addEventListener('input',onSpanChange);
// buttons[0].addEventListener('click',onDecreaseValue);
// buttons[1].addEventListener('click',onIncreaseValue);

// function onDecreaseValue(event){
//     counterValue.textContent-=1;
// };
// function onIncreaseValue(event){
//     counterValue.textContent+=1;
// };
// function onSpanChange(event){
//     console.log(event.currentTarget.value);
// };

// в этом варианте не получалась функция на увеличение. в чем ошибка?


const value = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter button');

let counterValue = 0;

value.addEventListener('input',onSpanChange);
buttons[0].addEventListener('click',onDecreaseValue);
buttons[1].addEventListener('click',onIncreaseValue);

function onDecreaseValue(event){
    value.textContent = counterValue;
    console.log(counterValue-=1);
};
function onIncreaseValue(event){
    value.textContent = counterValue;
   console.log(counterValue+=1);
};
function onSpanChange(event){
    console.log(event.currentTarget.value);
};