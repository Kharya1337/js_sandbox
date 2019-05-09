/*
Часть 1:
Создайте функцию “makeGreetings”, которая принимает один целочисленный аргумент - возраст. Она должна вернуть строку приветствие:
“Мой возраст 21 год”(без кавычек), где “21” - значение аргумента (во время проверки оно может быть любым), а окончание “год”, должно зависеть от цифры возраста, например:
21 год, 22 года, 24 года, 25 лет, 19 лет, 20 лет.
*/
function makeGreetings(age)
{
    return (age > 10 && age < 15 || (age % 10) > 4 && (age % 10) <= 9 || (age % 10) == 0) ? `Мой возраст ${age} лет`:
            ((age % 10) ==1) ?  `Мой возраст ${age} год`:
            `Мой возраст ${age} годa`;

}

/*
Часть 2:
Написать функцию splitArray которая первым аргументом принимает массив чисел, а вторым количество элементов в подмассивах. Функция должна вернуть массив массивов. Например: 
splitArray([1, 4, 5, 6, 2], 2)
вернет [[1, 4], [5, 6], [2]].
Если количества элементов недостаточно - последний подмассив может содержать меньшее количество элементов.
 */
 function splitArray(array, element)
 {
    var arr = new Array();
    var newArr = new Array();
    var j = 0;
    for(var i = 0; i <= array.length - element; i += 1)
    {   
        arr = array.slice(j, j+=element);
        if(arr[0] != null)
        {
            newArr[i] = arr;
        }
    }
    return newArr;
 }

/*
Часть 3:
Написать функцию add. Чтобы выполнялся следующий код:
var result1 = add(2)(3);
var result2 = add(4)(-1);
Где result1 === 5;
result2 === 3; 
*/
function add(a)
{
    return (b) => a + b;
}

/*
Часть 4:
Написать функцию transformData, которая принимает один аргумент - массив объектов такого вида:
{ login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 }
И должна вернуть объект где ключи - login объектов массиве, у которых  mark больше 5 и значения у этих ключей - полное имя пользователя, пример:
var res = transformData([
 { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
 { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
 { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
])

// res: { johnny778: 'John Doe', alexgerman: 'Alex' }
*/

function transformData(objArr)
{
    var res = new Object();
    var login, 
        firstName, 
        lastName, 
        mark;
    for(var i = 0; i < objArr.length; i+=1)
    {
        login = objArr[i][Object.keys(objArr[i])[0]];
        firstName = objArr[i][Object.keys(objArr[i])[1]];
        lastName = objArr[i][Object.keys(objArr[i])[2]];
        mark = objArr[i][Object.keys(objArr[i])[3]];


        if(mark > 5)
        {
            if(firstName !== '' && lastName !== '')
            {
                res[login] = firstName + ' ' + lastName;
            }else{
                res[login] = firstName + lastName;
            }
        }
    }


    return res;
}
