/*

Создать функцию print, которая принимает один аргумент - размер фигуры, возвращает строку, в которой символы составляют “стрелку” нужного размера, работу иллюстрируют примеры (символ ` обозначает начало и конец строки, в задаче необходимо использовать символ переноса строки):


*/

function print(size){
    let arrow = '\n';
    let spaces = ' ';
    let spacesLeft = '';
    let spacesCountLeft = 1;
    let spacesCount = 1;
    for(let i = 1; i < size - 1; i += 1){
        // arrow += spacesLeft;
        // arrow += `*${spaces}*\n`;
        for(let j = spacesCount - 2; j < spacesCount ; j += 1){
            spaces += ' ';
        }
        spacesCount += 2;
        // for(let k = spacesCountLeft - 1; k < spacesCountLeft; k += 1){
        //     spacesLeft += ' ';
        // } 
        // spacesCountLeft +=1;
    }

    for(let i = 1; i <= size - 1; i += 1){
        arrow += spacesLeft;
        arrow += `*${spaces}*\n`;
        spaces = spaces.slice(0, -2);
        for(let k = spacesCountLeft - 1; k < spacesCountLeft; k += 1){
            spacesLeft += ' ';
        } 
        spacesCountLeft +=1;
    }
    // arrow = arr
    arrow += spacesLeft + '*\n';
    return arrow;
}

function func(num) {
    let result = '\n';

    for(let i = 0; i < num - 1; i += 1) {
        result += ' '.repeat(i);
        result += '*';
        result += ' '.repeat(num * 2 - i * 2 - 3);
        result += '*\n';
    }
    result += ' '.repeat(num - 1);
    result += '*\n'
    return result;
}

// console.log(func(2));
// console.log(print(2))
/*
*           *
 *         *
  *       *
   *     *
    *   *
     * *
      *

*/

function print2(num) {

}


function getArgValue(name, history) {
    while(1) {
        let answer = prompt(`Введите ${name} -> `);
        history.push(answer);
        const number = parseFloat(answer);
        if(answer === 'exit') {
            return false;
        }     
        if(!isNaN(parseFloat(answer))) {
            return answer;
        }
    }
}

function calculate() {
    let result = {
        history: [],
        formula: '',
        args: {}
    };

    while(1) {
        let answer = prompt('Какая формула?');
        if(answer === 'exit') {
            return result;
        }

        if(answer === `1`) {
            result.formula = 'y = kx + b';
            result.args = {};
            let k = getArgValue('k', result.history);
            if(k === 'false') {
                return result;
            } else {
                result.args.k = k;
            }
            let x = getArgValue('x', result.history);
            if(x === 'false') {
                return result;
            } else {
                result.args.x = x;
            }
            let b = getArgValue('b', result.history);
            if(b === 'false') {
                return result;
            } else {
                result.args.b = b;
            }
            alert(result.args.k*result.args.x + result.args.b);
        }

        if(answer === `2`) {
            result.formula = 'y = x^2';
            result.args = {};
            let x = getArgValue('x', result.history);
            if(x === 'false') {
                return result;
            } else {
                result.args.x = x;
            }
            alert(Math.pow(result.args.x, 2));
        }
    }
    
    return result;
}

calculate();