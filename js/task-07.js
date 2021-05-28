// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет 
// меняться размер текста.

const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputRange.addEventListener('input', ()=>{
    text.style.fontSize =`${inputRange.value*1.5}px`;
});
