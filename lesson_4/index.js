"use strict";

/*
Part 1:
Создать функцию makeImages, которая принимает бесконечное количество аргументов - ссылок на изображения, и должна создать для каждой ссылки тег img, с соответствующим адресом, и добавить в body обернутой каждую в свой div. Пример:
makeImages('./img_1.png', './img_2.png', './img_3.png');
Результат должен получиться следующий:
<body>
   <script src="index.js"></script>
   <div><img src="./img_1.png"></div>
   <div><img src="./img_3.png"></div>
   <div><img src="./img_3.png"></div>
</body>
*/

function makeImages(){
    for(let i = 0; i < arguments.length; i += 1){
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = arguments[i];
        div.append(img);
        document.body.append(div);
    }
    
}

// makeImages('./img_1.png', './img_2.png', './img_3.png');
/*
Part 2:
Создать класс FormBuilder, который имеет следующие методы:
В конструкторе создает свой собственный элемент form, но не добавляет его никуда
appendTo(target), где target - html элемент, добавляет свой элемент form внутрь элемента target
addInput(name) - создает элемент input с типом text, атрибутом “name”=name и ложит его внутрь form
addCheckbox(name) - создает элемент input с типом checkbox, атрибутом “name”=name и ложит его внутрь form
addButton(name) - создает элемент button, текстом name и ложит его внутрь form
destroy() - убирает элемент form из html, Подсказка: parentElement, removeChild
Под form, везде имеется один и тот же элемент созданный в конструкторе.
*/

class FormBuilder{
    constructor(){
        this.form = document.createElement('form');
    }

    appendTo(target){
        target = document.createElement(target);
        target.append(this.form);
        document.body.append(target);
    }

    addInput(name){
        let input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('name', `${name}`);
        this.form.append(input);
        return this;
    }

    addCheckbox(name){
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.setAttribute('name', `${name}`);
        this.form.append(input);
        return this;
    }

    addButton(name){
        let button = document.createElement('button');
        button.innerHTML = `${name}`;
        this.form.append(button);
        return this;
    }

    destroy(){
        this.form.parentElement.removeChild(this.form);
    }
}

// let a = new FormBuilder();
// a.addInput('Hello');
// a.addCheckbox('Hello');
// a.addCheckbox('Hello');
// a.addCheckbox('Hello');
// a.addCheckbox('Hello');
// a.addInput('Hello');
// a.addButton('but');
// a.appendTo('div');


/*
Part 3:
Создать функцию initBall, которая будет содержать код, реализующий следующую логику:
Создаст div, который будет иметь стиль круглого шара любого цвета, небольшого размера, разместить его в body, его позиция на экране должна быть случайной
Если кликнуть мышью по этому кружку, он должен поменять свою позицию на случайную, и должен ее менять на каждый такой клик
Если кликнуть мышью вне кружка, то кружок должен удалиться из body, а все события должны перестать слушаться.
*/

function initBall(){
    let div = document.createElement('div');
    div.style.width = `20px`;
    div.style.height = `20px`;
    div.style.background = `red`;
    div.style.borderRadius = `50%`;
    div.style.position = `absolute`;
    div.style.left = `${Math.random()*document.documentElement.clientWidth - 15}px`;
    div.style.top = `${Math.random()*document.documentElement.clientHeight - 15}px`;
    document.body.append(div);
    div.addEventListener('click', (event) => {
        div.style.left = `${Math.random()*document.documentElement.clientWidth - 15}px`;
        div.style.top = `${Math.random()*document.documentElement.clientHeight - 15}px`;
        event.stopPropagation();
    });
    document.addEventListener('click', () => {
        try{
            document.body.removeChild(div);
        }catch{

        }
    });
}
// initBall();