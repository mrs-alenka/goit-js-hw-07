const name = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

name.addEventListener('input',onInputChange);

function onInputChange(event){
    nameUser.textContent=event.currentTarget.value;
    if(!event.currentTarget.value){
        nameUser.textContent = 'незнакомец';
    };
};

