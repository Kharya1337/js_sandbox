"use strict";

const eyeBall1 = document.getElementById('eyeball1');
const eyeBall2 = document.getElementById('eyeball2');

window.addEventListener('mousemove', (event) => {
    const dx = event.x - window.innerWidth / 2;
    const absX = dx / window.innerWidth / 2;
    const dy = event.y - window.innerHeight / 2;
    const absY = dy / window.innerHeight / 2;
    const transform = `translate(${absX*20}px, ${absY*20}px)`;
    eyeBall1.style.transform = transform;
    eyeBall2.style.transform = transform;
});