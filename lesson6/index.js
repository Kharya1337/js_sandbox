var randomEmail = require('random-email');
var validator = require("email-validator");
var formatValidator = require("format-validator");


let button = document.getElementById('generate');
let field = document.getElementById('random');
let close = document.getElementById('close');

button.addEventListener('click', (event) => {
    field.style.display = 'block';
    field.innerHTML = randomEmail();
    field.append(close);
});

close.addEventListener('click', event => {
    field.style.display = 'none';
});


let valid = document.getElementById('validate');
valid.addEventListener('change', event => {
    if(validator.validate(valid.value)) {
        valid.style.border = '2px solid lightgreen';
    } else {
        valid.style.border = '2px solid red';
    }
});


let check = document.getElementById('check');
let checkBox = document.getElementById('check-box');
let closeCheck = document.getElementById('close-check');
let checkField = document.getElementById('check-field');

check.addEventListener('click', (event) => {
    checkBox.style.display = 'block';
    checkBox.append(closeCheck);
    for (const key in formatValidator) {
        if (formatValidator.hasOwnProperty(key)) {
            // console.log(key.substring(0, 2));
           try {
            if(key.substring(0, 2) == 'is'){
                if(formatValidator[key](checkField.value) ) {
                        let div = document.createElement('div');
                        div.append(key);
                        checkBox.append(div);
                    };
            }   
           }catch{

           }
        }
    }

});

closeCheck.addEventListener('click', event => {
    checkBox.innerHTML = '';
    checkBox.style.display = 'none';
});