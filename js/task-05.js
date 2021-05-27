// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее 
// значение в span#name-output. 

// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const name = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

name.addEventListener('input',onInputChange);

function onInputChange(event){
    nameUser.textContent=event.currentTarget.value;
    if(!event.currentTarget.value){
        nameUser.textContent = 'незнакомец';
    };
};

