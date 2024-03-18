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

type Calc = "add" | "sub" | "+" | "-"
const add = function (val1: number, val2: number, calc: Calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "sub" || calc === "-") {
        return val1 - val2
    }
};

console.log(add(10, 5, "add"))
console.log(add(10, 5, "sub"))

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
    constructor(public name: string, public rollNo: number) {
    }

    addSkill(skill: string) {
        this.skills.push(skill)
    }
}
const student1 = new Student('Sabeh', 123);
student1.addSkill("JavaScript")
console.log(student1);



