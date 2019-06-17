import { resolve } from "dns";
import { rejects } from "assert";

function randomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
}

function waitForScroll() {
    return new Promise(resolve => {
        window.addEventListener('scroll', resolve);
    });
}

function drawOnScroll() {
    waitForScroll().then(() => {
        let div = document.getElementById('big-block');
        div.style.backgroundColor = randomColor();
    });
}
drawOnScroll();

function waitForAnswer() {
    return new Promise((resolve, rejects) => {
        window.addEventListener('keypress', (event) => {
            if(String.fromCharCode(event.which).toUpperCase() == 'Y') {
                resolve();
            } else if(String.fromCharCode(event.which).toUpperCase() == 'N' ) {
                rejects();
            }
        });
    });
}

function setText(text) {
    let div = document.getElementById('text');
    if(!div) {
        div = document.createElement('div');
        div.id = 'text';
    }
    div.innerHTML = text;
    div.style.position = 'absolute';
    div.style.left = '50px';
    div.style.top = '20px';
    document.body.append(div);
}
setText('Вы сделали домашнее задание? Y / N');
waitForAnswer()
    .then(() => setText('Так держать!'))
    .catch(() => setText('Нужно подтянуть('));


function waitForTime(s) {
    return new Promise(resolve => {
        setTimeout(resolve, s*1000, '100 кликов вне очереди.');
    });
}

function waitForClicks(numb) {
    let clicks = 0;
    return new Promise(resolve => {
        window.addEventListener('click', () => {
            clicks++;
            if(clicks === numb) {

                resolve('Good job, comrade.');
            }
        });
    });
}

function clickChallange(numb, s) {
    setText(`У вас есть ${s} секунд, чтобы сделать ${numb} кликов`);
    Promise.race([waitForClicks(numb), waitForTime(s)]).then((val) => setText(val));
}

window.clickChallange = clickChallange;