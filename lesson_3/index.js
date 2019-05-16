"use strict";

/*
Part 1:
Создать класс  Human, который в качестве аргумента принимает объект с ключами name(содержит имя строкой), age(содержит возраст числом).
Human({ name: 'ivan', age: 19 })
У класса Human должен быть метод sayHello, который будет выводить в консоль строку “Hello, my name is ${name}, I am ${age} years old”
Создать класс AlevelStudent, наследуемый от Human, который принимает в себя параметры name, age и новый ключ marks, которой будет содержать массив ваших оценок за домашние задание числами ([5, 3, 5, 1, 4])
AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });
У класса AlevelStudent должен быть метод averageMark, который возвращает среднее значение из вашего массива оценок
*/

class Human{
    constructor({name, age}){
        this.name = name;
        this.age = age;
    }

    sayHallo() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);        
    }

}

class AlevelStudent extends Human{
    constructor({name, age, marks}){
        super({name, age});
        this.marks = marks;
    }

    averageMark(){
        let avg = 0;
        if(!Array.isArray(this.marks)) return undefined;
        avg = this.marks.reduce((el, sum) => el + sum, 0) / this.marks.length
        return avg;
    }
}
// let Pet = new Human({ name: 'ivan', age: '19' });
// Pet.sayHallo();
// let student = new AlevelStudent({ name: 'Ivan', age: 19, marks: ''});
// student.sayHallo();
// console.log( student.averageMark());


/*
Part 2:
Создать класс  Calculator, со следующими методами:
reset() - сбрасывает текущий результат на 0
add(num) - изменяет текущий результат добавляя к нему num
sub(num) - изменяет текущий результат отнимая от него num
mul(num) - изменяет текущий результат умножая его на num
div(num) - изменяет текущий результат деля его на num
pow(num) - изменяет текущий результат возводя его в степень num
sqrt() - изменяет текущий результат, взяв у него квадратный корень
getResult() - возвращает текущий результат
Все методы кроме getResult - возвращают this, пример:
(new Calculator()).add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt().getResult() // returns 4
*/

class Calculator{
    constructor(){
        this.result = 0;
    }
    add(num){
        this.result+=num;
        return this;
    }

    sub(num){
        this.result-=num;
        return this;
    }

    mul(num){
        this.result*=num;
        return this;
    }

    div(num){
        this.result/=num;
        return this;
    }

    pow(num){
        this.result = Math.pow(this.result, num);
        return this;
    }

    sqrt(num){
        this.result = Math.sqrt(this.result);
        return this;
    }

    reset(){
        this.result = 0;
        return this;
    }

    getResult(){
        
        return this.result;
    }

}


/*
Part 3:
Создать класс  Point(x, y):
заменить метод toString, чтобы он возвращал “Point[x y]”, где x и y - значения
соответствующих свойств
создать метод set(x, y), который задает соответствующие значения
создать метод getX, который возвращает координату  x
создать метод getY, который возвращает координату  y
Создать класс  Line(point1, point2) - аргументы это объекты класса Point
заменить метод toString, чтобы он возвращал “Line(Point[x y] - Point[x y])”, где ”Point[x y]” - результат метода toString соответствующей точки
должны быть ключи point1 и point2, которые задаются в конструкторе
создать метод length(), который вернет расстояние между точками (подсказка формулы)
*/
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `Point[${this.x} ${this.y}]`;
    }

    set(x, y){
        this.x = x;
        this.y = y;
        return this;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}

class Line{
    constructor(point1, point2){
        this.point1 = point1;
        this.point2 = point2;
    }
    toString(){
        return `Line(${this.point1.toString()} - ${this.point2.toString()})`;
    }

    length(){
        return Math.sqrt(Math.pow( ( this.point2.getX()  - this.point1.getX() ), 2) + 
                        Math.pow( ( this.point2.getY()  - this.point1.getY() ), 2) );
    }
}



/*
Part 3:
Создать класс  WeightedPoint(x, y, weight) который наследуется от Point:
заменить метод toString, чтобы он возвращал “weight&Point[x y]”, где weight - значения
свойства веса, Point[x y], - результат работы родительского метода.
заменить метод set(x, y, weight), который задает соответствующие значения
создать метод getWeight, который возвращает свойство веса

Пример:
const p1 = new Point(2, 3.4);
const p2 = new WeightedPoint(-1, 0.5, 3);
const line = new Line(p1, p2);
line.toString() // "Line(Point[2 3.4] - 3&Point[-1 0.5])"
line.length() // 4.172529209005013
*/

class WeightedPoint extends Point{
    constructor(x, y, weight){
        super(x, y);
        this.weight = weight;
    }

    toString(){
        return `${this.weight}&${super.toString()}`;
    }

    set(x, y, weight){
        super.set(x, y);
        this.weight = weight;
        return this;
    }
}
const p1 = new Point(2, 3.4);
const p2 = new WeightedPoint(-1, 0.5, 3);
const line = new Line(p1, p2);
console.log(line.toString() )
// "Line(Point[2 3.4] - 3&Point[-1 0.5])"
console.log(line.length() )
// 4.172529209005013
/*
Part 4*:
Создать класс CalculatorExtended, который наследует класс Calculator из части 2.
Заменить метод toString, чтобы он возвращал историю операций калькулятора и результат:

const calc = new Calculator();
calc.add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt();
calc.toString(); // √((0 - 3) * 2 / 3) ^ 4) = 4
Еще примеры:
calc.reset().div(2).reset().mul(2).toString() // 0 * 2 = 0
calc.reset().div(2).mul(2).toString() // 0 / 2 * 2 = 0
calc.reset().sub(3).div(2).toString() // (0 - 3) / 2 = -1.5
calc.reset().sqrt().toString() // √(0) = 1.5
calc.reset().add(4).sqrt().toString() // √(0 + 4) = 2
calc.reset().add(4).mul(2).mul(2).toString() // (0 + 4) * 2 * 2 = 2
*/

class CalculatorExtended extends Calculator{
    constructor(){
        super();
        this.memory = '√';
    }
}