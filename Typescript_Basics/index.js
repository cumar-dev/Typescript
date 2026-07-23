"use strict";
const userName = "john doe";
console.log(`Hello ${userName}`);
let number1 = 10;
let number2 = 20;
console.log(number1 + number2);
let myName = "cumar acbdi axmed";
console.log(`Hello ${myName}`);
myName = "show man";
console.log(myName);
let age = 20;
console.log(age);
let isStudent = true;
console.log(isStudent);
// Array
let users = ["Aamina", "canab", "iqro"];
console.log(users);
users.push("maryan", "nafiso");
console.log(users[0]);
let numbers = [100, 200, 300, 400];
console.log(numbers);
// tuple
let entry = [1, "omar"];
console.log(entry);
entry.push(2, "cadnaan");
console.log(entry);
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
    return names.find((name) => name === "faadumo");
}
console.log(arraysOfNames("Ali", "Ahmed", "faadumo"));
// objects
function showUsers(user) {
    console.log(user.name);
}
showUsers({ name: "Ali" });
function showCurrentUser(user) {
    console.log(user.name, user.email, user.isLoggedIn);
}
showCurrentUser({ name: "ali", email: "omar@gmail.com", isLoggedIn: false });
function showUserInformation(user) {
    console.log(user.name, user.department, user.location, user.village);
}
showUserInformation({
    name: "Omar",
    department: "Computer Science",
    location: "Hodan",
    village: "Barmuudo",
});
const b = {
    isbn: "1234567890",
    title: "Typescript hand book",
};
const p1 = { username: "omar" };
console.log(p1);
const p2 = { username: "omar", bio: "i am a student" };
console.log(p2);
const b1 = {
    id: 1234,
    user: "omar",
    role: "admin"
};
console.log(b1);
