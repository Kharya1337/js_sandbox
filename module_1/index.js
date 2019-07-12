import MaskedInput from "./mask";
import Cat from './cat.png';

function matrixDiff(arr1, arr2) {
    if(!Array.isArray(arr1) && !Array.isArray(arr2) || arr1.length != arr2.length) {
        return NaN;
    } else {
        let result = 0;
        for(let i = 0; i < arr1.length; i+=1) {
            if (arr1[i].length != arr2[i].length) {
                return NaN;
            }
            for(let j = 0; j < arr1[i].length; j+=1) {
                result += Math.abs(arr1[i][j] - arr2[i][j]);
            }
        }
        
        return result;
    }
}
window.matrixDiff = matrixDiff;

/*
Написать функцию “strangeSearch”, которая принимает один аргумент, массив слов.
Для каждого слова она должна создать блок, в котором будет текст этого слова и элемент input с типом number, с начальным значением 0. Создать кнопку с id=”go”, и текстом “Search”, по нажатию на которую страница будет перенаправлена на страницу поиска YouTube, где в поиске будет составлена фраза из слов у input-ов которых значение больше чем 0, и они должны стоять в порядке увеличения чисел их input-ов и быть разделенными символом ‘+’.

Вам может пригодится:
inputElement.value
window.location.href
*/
function strangeSearch(arr) {
    if(!Array.isArray(arr)) {
        return undefined;
    }
    let block = document.createElement('div');
    for (const el of arr) {
        let label = document.createElement('label');
        let numb = document.createElement('input');
        numb.setAttribute('type', 'number');
        numb.setAttribute('min', '0');
        numb.className = 'number';
        numb.setAttribute('value', 0);
        label.innerHTML += el;
        block.append(numb,label);
        block.innerHTML += '<br>';
    }
    let search = document.createElement('button');
    search.innerHTML = 'Search';
    let res = 'https://www.youtube.com/results?search_query=';
    let query = '';
    const words = [];//remake
    let labels = document.getElementsByTagName('label');
    let numbers = document.getElementsByClassName('number');
    search.addEventListener('click', el => {
        for (let i = 0; i < numbers.length; i+=1) {
            if(numbers[i].value != 0) {
                words.push({word: labels[i].innerHTML, value: numbers[i].value});//remake
            }
        }
        words.sort((a, b) => a.value - b.value);//remake
        query = words.map(o => o.word).join('+');//remake
        // console.log(res + query);
        window.location.href = res + query;
    });
    block.append(search);
    document.body.append(block);
}
window.strangeSearch = strangeSearch;
strangeSearch(['Bill', 'Kill', 'Song']);

let mask = new MaskedInput();

function move(el) {
    let cat = document.getElementById('cat');
    cat.style.left = `${el.x}px`;
    cat.style.top = `${el.y}px`;
}

function stickyСat() {
    var cat = document.createElement('img');
    cat.id = 'cat';
    cat.src = Cat;
    cat.style.width = '30px';
    cat.style.height = '30px';
    cat.style.position = 'absolute';
    document.body.append(cat);
    window.addEventListener('mousemove', move);
}
function unstickTheСat() {
    let img = document.getElementsByTagName('img');
    for(let i = 0; i < img.length; i+=1) {
        window.removeEventListener('mousemove', move);
        img[i].remove();
    }

}
window.stickyСat = stickyСat;
window.unstickTheСat = unstickTheСat;