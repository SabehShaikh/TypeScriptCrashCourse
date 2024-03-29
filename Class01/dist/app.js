"use strict";
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const add = function (val1, val2, calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "sub" || calc === "-") {
        return val1 - val2;
    }
};
console.log(add(10, 5, "add"));
console.log(add(10, 5, "sub"));
// Tuples: --> fixed length array
// let genders: [string, string] = ['Male', 'Female'] // indicates that index 0 and 1 is string
// genders.push("xyz")
// console.log(genders);
// let admin: [number, string] = [1, "Admin"]
// let error: [number, string] = [404, "Not Found"]
// Class:
// class Student {
//     name: string;
//     rollNo: number;
//     constructor(n: string, r: number) {
//         this.name = n;
//         this.rollNo = r;
//     }
// }
// SHORT END
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.skills = [];
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
}
const student1 = new Student("Sabeh", 123);
const student2 = new Student("Shaikh", 786);
student1.addSkill("JavaScript");
student2.addSkill("Python");
console.log(student1, student2);
// Class 04 -- Getter and Setter
// class Product {
//     constructor(
//         private id: number,
//         private name: string,
//         private price: number
//     ) {
//     }
//     public getId(): number {
//         return this.id;
//     }
//     public getName(): string {
//         return this.name;
//     }
//     public getPrice(): number {
//         return this.price;
//     }
// }
// const product1 = new Product(1, "Cup", 200)
// console.log(product1.getName());
// Inheritance:
// abstract class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number
//     ) {
//     }
//     get id() {
//         return this._id;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName: string) {
//         if (!newName) {
//             throw new Error("Name cannot be empty")
//         }
//         this._name = newName
//     }
//     get price() {
//         return this._price;
//     }
//     abstract getDiscountRates(): number;
// }
// class ClothingProduct extends Product {
//     constructor(
//         _id: number,
//         _name: string,
//         _price: number,
//         private _color: string,
//         private _size: "S" | "M" | "L" | "XL"
//     ) {
//         super(_id, _name, _price);
//     }
//     getDiscountRates() {
//         return this.price * 0.9
//     }
// }
// class ElectronicsProducts extends Product {
//     constructor(
//         _id: number,
//         _name: string,
//         _price: number,
//         private _brand: string,
//         private _model: string
//     ) {
//         super(_id, _name, _price);
//     }
//     getDiscountRates() {
//         return this.price * 0.5
//     }
// }
// class Cart {
//     private products: Product[] = []
//     constructor(){}
//     get totalPrice(){
//         let price: number = 0;
//       this.products
//     }
// }
// const tShirt = new ClothingProduct(7, "Levis", 2500, "Red", "S");
// console.log(tShirt);
// STATIC Methods/Properties / Singletons:
class Util {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}
const utlInst = Util.getInstance();
const utlInst2 = Util.getInstance();
let abc = "Apple";
abc = 123;
abc = true;
function log(creature) {
    if ("runningSpeed" in creature) {
        // Type Guards
        console.log(creature.runningSpeed);
    }
    // console.log(creature.runningSpeed);
}
const sparrow = {
    name: "Sparrow",
    flyingSpeed: 150,
};
log(sparrow);
// Class 06:
// Type Casting
const input = document.getElementById("input1");
// Another way
const input1 = document.getElementById("input1");
// Generics:
// in function syntax:
// const promiseFunc = (): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task perfomed");
//     });
//   });
// };
// promiseFunc().then
const promiseFunc = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("TASK DONE");
    }, 2000);
});
promiseFunc.then((data) => {
    console.log(data.split(" "));
});
const promise_Func = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Ishaq",
                id: 123,
            });
        }, 2000);
    });
};
promise_Func().then((data) => {
    console.log(data.name);
});
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = merge({ name: "sabeh" }, { id: 123 });
console.log(merged.name);
// Class 07:
// Decorators
function Looger(message) {
    return function (constructor) {
        console.log("LOGGING....");
        console.log(message);
    };
}
function FillHtml(template, elemId) {
    return function (constructor) {
        const elem = document.getElementById(elemId);
        const p = new constructor();
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1").innerText = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "sabeh";
    }
};
Person = __decorate([
    Looger("Calling from Person") // argument passed
    ,
    FillHtml("<h1>Hello</h1>", "app")
], Person);
//# sourceMappingURL=app.js.map