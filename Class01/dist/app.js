"use strict";
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;
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
const student1 = new Student('Sabeh', 123);
student1.addSkill("JavaScript");
console.log(student1);
//# sourceMappingURL=app.js.map