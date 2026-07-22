"use strict";
// const userName: string = "john doe";
// console.log(`Hello ${userName}`);
// let number1: number = 10;
// let number2: number = 20;
// console.log(number1 + number2);
// let myName: string = "cumar acbdi axmed";
// console.log(`Hello ${myName}`);
// myName = "show man";
// console.log(myName);
// let age: number = 20;
// console.log(age);
// let isStudent: boolean = true;
// console.log(isStudent);
// Array
// let users = ["Aamina", "canab", "iqro"];
// console.log(users);
// users.push("maryan", "nafiso");
// console.log(users[0]);
// let numbers: Array<number> = [100, 200, 300, 400];
// console.log(numbers);
// tuple
// let entry: [number, string] = [1, "omar"];
// console.log(entry);
// entry.push(2, "cadnaan");
// console.log(entry);
// function
function greet(name) {
    return "hello " + name;
}
console.log(greet("omar"));
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
function log(message, userId) {
    console.log(`[${userId || "unknown"}] ${message}`);
}
log("hello");
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3);
function arraysOfNames(...names) {
    return names.find(name => name === "faadumo");
}
console.log(arraysOfNames("Ali", "Ahmed", "faadumo"));
