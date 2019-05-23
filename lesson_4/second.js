/*

Создать функцию print, которая принимает один аргумент - размер фигуры, возвращает строку, в которой символы составляют “стрелку” нужного размера, работу иллюстрируют примеры (символ ` обозначает начало и конец строки, в задаче необходимо использовать символ переноса строки):


*/

function print(size){
    let arrow = '`\n';
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
    arrow += spacesLeft + '*\n`';
    console.log(arrow);
}
print(10);



/*
*           *
 *         *
  *       *
   *     *
    *   *
     * *
      *

*/

"use strict"

function calculate() {
    const result = { 'history': [], 'formula': '', 'args': {} };
    function repeat() {
        const value = prompt('Введите 1, если необходимо провести расчет формули y = kx + b.\nВведите 2, если необходимо провести расчет формули y = x^2.\nВведите exit, если необходимо закончить расчеты.', '');

        function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
        let _exit = 'no';

        function value1() {
            result.args = {};
            function funK() {
                let k = prompt('Введите k для расчета функции y = kx + b.\nВведите exit, если необходимо закончить расчеты.', '');
                if (k == 'exit' || k == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(k)) {
                        case true:
                            result.args.k = k;
                            break;
                        case false:
                            funK();
                            break;
                    }
                }
                return result;
            }

            function funX() {
                let x = prompt('Введите x для расчета функции y = kx + b.\nВведите exit, если необходимо закончить расчеты.', '');
                if (x == 'exit' || x == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(x)) {
                        case true:
                            result.args.x = x;
                            break;
                        case false:
                            funX();
                            break;
                    }
                }
                return result;
            }
            function funB() {
                let b = prompt('Введите b для расчета функции y = kx + b.\nВведите exit, если необходимо закончить расчеты.', '');
                if (b == 'exit' || b == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(b)) {
                        case true:
                            result.args.b = b;
                            break;
                        case false:
                            funB();
                            break;
                    }
                }
                return result;
            }
            if (_exit !== 'exit') funK();
            result.history.push(result.args.k);

            if (_exit !== 'exit') funX();
            result.history.push(result.args.x);

            if (_exit !== 'exit') funB();
            result.history.push(result.args.b);

            result.formula = 'y = kx + b';

            if (_exit !== 'exit' && result.args.k !== null && result.args.x !== null && result.args.b !== null) alert(`y = ${result.args.k * result.args.x + 1 * (result.args.b)}`);
            return result;
        };

        //=================

        function value2() {
            result.args = {};

            function funX() {
                let x = prompt('Введите x для расчета функции y = x^2.\nВведите exit, если необходимо закончить расчеты.', '');
                if (x == 'exit' || x == null) {
                    _exit = 'exit';
                    result.history.push(_exit);
                    return result;
                } else {
                    switch (isNumber(x)) {
                        case true:
                            result.args.x = x;
                            break;
                        case false:
                            funX();
                            break;
                    }
                }
                return result;
            }

            if (_exit !== 'exit') funX();
            result.history.push(result.args.x);

            result.formula = 'y = x^2';

            if (_exit !== 'exit' && result.args.x !== null) alert(`y = ${result.args.x * result.args.x}`);
            return result;
        };

        //================================
        switch (value) {
            case '1':
                value1();
                repeat();
                break;
            case '2':
                value2();
                repeat();
                break;

            case 'exit':
                result.history.push('exit');
                break;

            case null:
                break;

            default:
                calculate();
                break;
        };
        return result;

    }
    repeat();
    return result;
};