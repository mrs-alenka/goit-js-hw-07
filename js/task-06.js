// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

//  - Сколько символов должно быть в инпуте, 
// указывается в его атрибуте data-length.

//  - Если введено подходящее количество,
//  то border инпута становится зеленым, 
//  если неправильное - красным.

const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur',onValidationCheck);

function onValidationCheck(event){
    const lengthInput = inputEl.getAttribute('data-length');
    const presentValue = event.target.value.trim().length;
 if(presentValue == 0 ){
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
    }
 else if(lengthInput==presentValue){
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
}
else if(Number(lengthInput)>presentValue ||
        Number(lengthInput)<presentValue
){
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
} 
};
