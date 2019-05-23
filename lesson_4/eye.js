"use strict";

let orbit = document.createElement('div');
let eye = document.createElement('div');

orbit.append(eye);
document.body.append(orbit);

// orbit.style.overflow = 'hidden';
orbit.style.position = 'relative';
orbit.style.left = '0';
orbit.style.top = '0';
orbit.style.background = 'lightgray';
orbit.style.height = '50px';
orbit.style.width = '50px';
orbit.style.borderRadius = '50%';
orbit.style.border = '1px solid black';

let orbitCenter = [parseInt(orbit.style.height) / 2, parseInt(orbit.style.width) / 2];
let orbitRadius = parseInt(orbit.style.width) / 2;
console.log(orbitCenter);

eye.style.position = 'absolute';
eye.style.background = 'red';
eye.style.height = '5px';
eye.style.width = '5px';
eye.style.borderRadius = '50%';
eye.style.border = '1px solid black';


window.addEventListener('mousemove', (event) => {
    let res = limit(event.x, event.y)
    eye.style.left = `${(res.x)}px`;
    eye.style.top = `${res.y}px`;
});


function limit(x, y) {
    var dist = distance([x, y], orbitCenter);
    if (dist <= orbitRadius) {
        return {x: x, y: y};
    } 
    else {
        x = x - orbitCenter[0];
        y = y - orbitCenter[1];
        var radians = Math.atan2(y, x)
           return {
               x: Math.cos(radians) * orbitRadius + orbitCenter[0],
               y: Math.sin(radians) * orbitRadius + orbitCenter[1]
           }
        } 
    }

function distance(dot1, dot2) {
    var x1 = dot1[0],
        y1 = dot1[1],
        x2 = dot2[0],
        y2 = dot2[1];
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

