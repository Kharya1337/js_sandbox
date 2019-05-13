/*
Часть 1:
Создайте функцию “removeKeys”, которая принимает два аргумента: первый это объект второй это массив строк.
Эта функция должна вернуть исходный объект у которого не будет ключей, названия которых есть в массиве (втором аргумента). Например:
removeKeys({ a: 1, b: [], c: '' }, ['a', 'c'])
Вернёт { b: [] }
 */
 function removeKeys(obj, strArr)
 {
    if(typeof obj !== "object") return undefined; 
    if(!strArr || !Array.isArray(strArr)) return obj;
    strArr.forEach(el => {
        if(el in obj){
            delete obj[el];
        }
    });
    return obj;
 }


 /*
 Часть 2:
Написать функцию clearNumbers, которая принимает один аргумент - массив массивов. Функция должна вернуть этот же массив массивов, но очистив их от не числовых значений. Пример:

clearNumbers([[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']]);
Вернет: [[1], [2, 3], [-3]]
 */
function clearNumbers(arr)
{
    if(!arr || !Array.isArray(arr)  ) return undefined;
    arr = arr.map(el =>
    {
        if(Array.isArray(el))
        {
            el = el.map(number =>
            {
                if(typeof number === "number")
                {
                    return number;
                }else return null;
            });
        } else return undefined;

        return el.filter(num => num!= null);
    });

    return arr.filter(el => el != undefined);
}


/*
Часть 3:
Написать функцию reverse, которая принимает бесконечное количество аргументов, где каждый и них - строка. Функция должна вернуть массив строк в обратном порядке, где каждая строка - будет задом-наперед, Например:
reverse('123', '456')
Вернет ['654', '321']
*/
function reverse(num)
{
    if(arguments.length == 0) return undefined;

    for(var i = 0; i < arguments.length; i+=1)
    {
        if(!arguments[i] ) return undefined;
    }
    
    var arr = new Array();
    for(var i = 0; i < arguments.length; i+=1)
    {
        if(typeof arguments[i] != "string") 
        {
            continue;
        }
        arr[i] = arguments[i].split('');
        arr[i] = arr[i].reverse();
        arr[i] = arr[i].join('');
        
    }

    return arr.reverse();
}


/*
Часть 4*:
Написать функцию “join”, которая принимает неограниченное количество аргументов,
Эта функция должна вернуть первый объект из аргументов, к которому необходимо “присоединить” все остальные объекты которые есть в аргументах (у этого объекта должны быть все ключи всех объектов), если ключи повторяются, то необходимо их значения:
сложить: числа, строки, массив: соединить, заменить в другом случае), пример:
join(3, { name: 'K', k: [3], j: {} }, 'Hello', { n: 3, k: [4] }, { n: 7, name: 'ent', j: 13 });
Вернет:
{ name: 'Kent', k: [3, 4], n: 10, j: 13 };
*/
function join(arg)
{
    var objArr = new Array();
    var k = 0;
    for (const iterator of arguments) 
    {
        if(typeof iterator == "object" && !Array.isArray(iterator))
        {
            objArr[k] = iterator;
            k++;
        }
    }
    var obj = objArr[0];
    for(var i = 1; i < objArr.length; i+=1)
    {
        for (const key in objArr[i]) 
        {
            if(key in obj)
            {
                if(Array.isArray(obj[key]) )
                {
                    for (const iterator of objArr[i][key]) 
                    {
                        obj[key].push(iterator);
                    }

                }else if(typeof obj[key] == "number" || typeof obj[key] == "string")
                {
                    obj[key]+=objArr[i][key];
                }
                if(typeof obj[key] != typeof objArr[i][key])
                {
                    obj[key] = objArr[i][key];
                }
                
            }else{
                obj[key] = objArr[i][key];
            }
        }
    }

    return obj;
}
