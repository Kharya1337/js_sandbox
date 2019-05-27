const func4 = (arr) => {
    if(!Array.isArray(arr)) return undefined;
    let sum = 0, max = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
            
    }
    
    if(max == 0) {
        max = arr[0];
        arr.forEach(element => {
            if(max < element) max = element;
        });
    }
    return max;
}
// console.log(func4([1, 2, -20, -15, 3, 44]));

const func5 = (arr) => {
    return (Array.isArray(arr)) ? 
    arr.join(',').split(',').filter(e => !isNaN(parseFloat(e)) && isFinite(e)).map(el => +el) : 
    undefined;
}
// console.log(func5([[[[[12], 14]], 420], [55]]))


const add = (a) => {
    let sum = a;
    let func = (b) => {
        if(b) {
            sum += b;
            return func;  
        }else {
            return func;
        }
    };

    func.toString = () => sum;
    // console.log(func.toString())
    return func;
};
// console.log(add(5)(6)(12)(1) == 24);


const mask = (str) => {
    if(!str) return undefined;
    str = str.toString().split('');
    for(let i = str.length - 5; i >= 0; i -= 1){
        str[i] = '*';
    }
    str = str.join('');
    return str;
}
// console.log(mask(13546865));

/*
Задача 6.
У тебя есть последовательность чисел от 8 до 88.
М = [8,9,10...86,87,88]. Одно из чисел встречается дважды.
Как узнать это число?
Отсортировать массив и пройтись по елементам массива, если элемент массива === следующему, то мы нашли число,
которое встречается дважды
М = [8,9,10...86,87,88]
M = M.sort();
for(let i = 0; i < m.length - 1; i += 1) {
    if(M[i] === M[i + 1]) {
        return M[i];// искаемое число
    }
}
*/


// const func6 = () => {
//     let m = [];
//     let k = 8;
//     for(let i = 0; i < 81; i += 1) {
//         m[i] = k++;
//     }
//     m[75] = 12;
//     m = m.sort();
//     console.log(m);
//     for(let i = 0; i < m.length; i += 1) {
//         if(m[i] === m[i + 1]) {
//             return m[i];
//         }
//     }   
// }
// console.log(func6());