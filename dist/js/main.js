"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'ali',
    age: 12,
    isStudent: false
};
//2-misol
function add(a, b) {
    return a + b;
}
add(1, 2);
//3-misol
function viodFunction() {
    console.log('Hello world');
}
viodFunction();
const person = {
    name: 'ali',
    password: '123456'
};
const myColor = "qizil";
//6-misol
function throwError(message) {
    throw new Error(message);
}
//7-misol
function unknownFunction(message) {
    if (typeof message === "string") {
        console.log("string:", message.toUpperCase());
    }
    else if (typeof message === "number") {
        console.log("number:", message + message);
    }
    else {
        console.log("bunday tur mavjud emas:", message);
    }
}
unknownFunction("Hello");
//8-misol
class Car {
    constructor(brand, engineNumber, year) {
        this.brand = brand;
        this.engineNumber = engineNumber;
        this.year = year;
    }
    getEngineNumber() {
        return this.engineNumber;
    }
}
class ElectricCar extends Car {
    showYear() {
        console.log(`Year: ${this.year}`);
    }
}
class Circle {
    draw() {
        console.log("uchburchak");
    }
}
//10-misol
class Hayvon {
    eat() {
        console.log("Hayvon ovqat yeyayapti");
    }
}
class It extends Hayvon {
    bark() {
        console.log("It hurdi: Vov-vov!");
    }
}
const myDog = new It();
myDog.eat();
myDog.bark();
//11-misol
function identity(value) {
    return value;
}
console.log(identity('Hello'));
console.log(identity(42));
//12-misol
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
const updateUser = {
    email: 'newemail@example.com'
};
const contact = {
    name: 'John Doe',
    email: 'john@example.com'
};
//15-misol
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
console.log(MathOperations.add(5, 3));
console.log(MathOperations.subtract(5, 3));
//16-misol
const numbers = [1, 2, 3, 4];
console.log(numbers);
//17-misol
function LogParam(target, propertyKey, parameterIndex) {
    const existingLoggedParams = Reflect.getOwnMetadata("log_params", target, propertyKey) || [];
    existingLoggedParams.push(parameterIndex);
    Reflect.defineMetadata("log_params", existingLoggedParams, target, propertyKey);
}
require("reflect-metadata");
//18-misol
function processValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * value;
    }
    else if (value instanceof Date) {
        return value.toISOString();
    }
}
console.log(processValue('hello'));
console.log(processValue(5));
console.log(processValue(new Date()));
const response = {
    data: 'Hello, World!',
    success: true
};
//20-misol
function MeasureTime(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.time(propertyKey);
        const result = originalMethod.apply(this, args);
        console.timeEnd(propertyKey);
        return result;
    };
}
