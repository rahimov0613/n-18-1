interface IPerson {
    name: string;
    age: number;
    isStudent: boolean;
}

const user: IPerson = {
    name: 'ali',
    age: 12,
    isStudent: false
}

//2-misol

function add(a: number, b: number): number {
    return a + b
}

add(1, 2)

//3-misol

function viodFunction(): void {
    console.log('Hello world');
}
viodFunction()
//4-misol

interface IUser {
    name: string;
    readonly password: string;
}

const person: IUser = {
    name: 'ali',
    password: '123456'
}
//5-misol

type Color = "qizil" | "yashil" | "kok";

const myColor: Color = "qizil";


//6-misol

function throwError(message: string): never {
    throw new Error(message);
}
//7-misol
function unknownFunction(message: unknown): void {
    if (typeof message === "string") {
        console.log("string:", message.toUpperCase());
    } else if (typeof message === "number") {
        console.log("number:", message + message);
    } else {
        console.log("bunday tur mavjud emas:", message);
    }
}

unknownFunction("Hello");

//8-misol

class Car {
    public brand: string;
    private engineNumber: string;
    protected year: number;

    constructor(brand: string, engineNumber: string, year: number) {
        this.brand = brand;
        this.engineNumber = engineNumber;
        this.year = year;
    }

    public getEngineNumber(): string {
        return this.engineNumber;
    }
}

class ElectricCar extends Car {
    showYear() {
        console.log(`Year: ${this.year}`);
    }
}

//9-misol

interface Drawable {
    draw(): void;
}

class Circle implements Drawable {
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

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>('Hello'));
console.log(identity<number>(42));

//12-misol

function filterEvenNumbers<T extends number>(arr: T[]): T[] {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

//13-misol

interface User {
    name: string;
    email: string;
    age: number;
}

const updateUser: Partial<User> = {
    email: 'newemail@example.com'
};

//14-misol

interface User {
    name: string;
    email: string;
    age: number;
}

type UserContactInfo = Pick<User, 'name' | 'email'>;

const contact: UserContactInfo = {
    name: 'John Doe',
    email: 'john@example.com'
};

//15-misol

namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(MathOperations.add(5, 3));
console.log(MathOperations.subtract(5, 3));

//16-misol

const numbers: readonly number[] = [1, 2, 3, 4];

console.log(numbers);

//17-misol

function LogParam(target: any, propertyKey: string, parameterIndex: number) {
    const existingLoggedParams: number[] = Reflect.getOwnMetadata("log_params", target, propertyKey) || [];
    existingLoggedParams.push(parameterIndex);
    Reflect.defineMetadata("log_params", existingLoggedParams, target, propertyKey);
}

import "reflect-metadata";

//18-misol

function processValue(value: string | number | Date) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * value;
    } else if (value instanceof Date) {
        return value.toISOString();
    }
}

console.log(processValue('hello'));
console.log(processValue(5));
console.log(processValue(new Date()));

//19-misol

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const response: ApiResponse<string> = {
    data: 'Hello, World!',
    success: true
};

//20-misol

function MeasureTime(target: Object | Function, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);
        const result = originalMethod.apply(this, args);
        console.timeEnd(propertyKey);
        return result;
    };
}
