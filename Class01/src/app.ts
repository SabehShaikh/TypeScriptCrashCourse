// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;

// const add = function (val1: number, val2: number) {
//     return val1 + val2;
// };

// button.addEventListener("click", function () {
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//     console.log(add(+firstVal, +secondVal));
// });

// Basic Types

// 1. String: string => "Apple" , "Orange"
// 2. Number: number => 1 , 2 , 3
// 3. Boolean: boolean => true , false

// let person = "Sabeh";
// person = "xyz";

// const arr: string[] = ['Apple', 'Orange'];
// arr.push("abc")
// arr.push(3) // cannot push type number to string.

// const arr2: number[] = [1, 2, 3];
// arr2.push(4)
// arr2.push("abc") // cannot push type string to number.

// This is my new comment

// type Person = {
//     name: string;
//     rollNo: number;
//     hobbies: string[];
//     email?: string;
// }

// let person: Person = {
//     name: 'Ishaq',
//     rollNo: 405,
//     hobbies: ['Video Games'],
// };

// person.email = "test@gmail.com"

// const persons: Person[] = [];

// persons.push(
//     {
//         name: 'Ameen',
//         rollNo: 406,
//         hobbies: ['Cricket'],
//         email: "xyz@gmail.com"
//     }
// );

// const add = function (val1: number, val2: number, cb: (x: string) => void): number {
//     cb("Hello")
//     return val1 + val2;
// };

// let func: (x: number, y: number, z: (x: string) => void) => number;

// func = add;

// Type Literals:

type Calc = "add" | "sub" | "+" | "-";
const add = function (val1: number, val2: number, calc: Calc) {
  if (calc === "add" || calc === "+") {
    return val1 + val2;
  } else if (calc === "sub" || calc === "-") {
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
  private skills: string[] = [];
  constructor(public name: string, public readonly rollNo: number) { }

  addSkill(skill: string) {
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
  private static instance: Util;
  private constructor() { }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Util();
    }
    return this.instance;
  }
}
const utlInst = Util.getInstance();
const utlInst2 = Util.getInstance();

// CLASS 05 // union operators
type Combine = string | number | boolean;
let abc: Combine = "Apple";
abc = 123;
abc = true;

// type Animal = {
//   name: string;
//   runningSpeed: number;
// };

// type Bird = {
//   name: string;
//   flyingSpeed: number;
// };
// type Creature = Animal | Bird; // Union Types

// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300,
//   };

// Intersection Types:
// type Creature = Animal & Bird; // Intersection Types

// const cockroach: Creature = {
//   name: "Cockroach",
//   runningSpeed: 100,
//   flyingSpeed: 300,
// };

// Interfaces:
// interface Animal {
//   name: string;
//   runningSpeed: number;
// }

// interface Bird {
//   name: string;
//   flyingSpeed: number;
// }

// interface Creature extends Animal, Bird {}

// const tiger: Creature = {
//   name: "Tiger",
//   runningSpeed: 300,
//   flyingSpeed: 10,
// };

// interface Animal {
//   name: string;
//   runningSpeed: number;
//   eat(food: string): string;
// }

// class Tiger implements Animal {
//   constructor(public name: string, public runningSpeed: number) {}

//   eat(food: string) {
//     return "Eating Food";
//   }
// }

// const abc = new Tiger('ABC', 450);
// console.log(abc.eat('Meat'));
// console.log(abc);

// Type Guards

type Bird = {
  name: string;
  flyingSpeed: number;
};

type Animal = {
  name: string;
  runningSpeed: number;
};

type Creature = Animal | Bird;

function log(creature: Creature) {
  if ("runningSpeed" in creature) {
    // Type Guards
    console.log(creature.runningSpeed);
  }

  // console.log(creature.runningSpeed);
}
const sparrow: Creature = {
  name: "Sparrow",
  flyingSpeed: 150,
};
log(sparrow);

// Class 06:
// Type Casting
const input = document.getElementById("input1")! as HTMLInputElement;
// Another way
const input1 = <HTMLInputElement>document.getElementById("input1")!;

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

const promiseFunc: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("TASK DONE");
  }, 2000);
});

promiseFunc.then((data) => {
  console.log(data.split(" "));
});

type User = {
  name: string;
  id: number;
};

const promise_Func = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Ishaq",
        id: 123
      });
    }, 2000);
  });
}

promise_Func()
  .then((data) => {
    console.log(data.name);
  });

function merge<T, U>(objA: T, objB: U) {
  return {...objA , ...objB}
}
const merged = merge({name: 'sabeh'} , {id: 123})
console.log(merged.name);
