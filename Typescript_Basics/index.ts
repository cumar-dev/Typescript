const userName: string = "john doe";
console.log(`Hello ${userName}`);

let number1: number = 10;
let number2: number = 20;
console.log(number1 + number2);

let myName: string = "cumar acbdi axmed";
console.log(`Hello ${myName}`);

myName = "show man";
console.log(myName);

let age: number = 20;
console.log(age);

let isStudent: boolean = true;
console.log(isStudent);

// Array

let users = ["Aamina", "canab", "iqro"];
console.log(users);

users.push("maryan", "nafiso");

console.log(users[0]);

let numbers: Array<number> = [100, 200, 300, 400];
console.log(numbers);

// tuple

let entry: [number, string] = [1, "omar"];
console.log(entry);
entry.push(2, "cadnaan");
console.log(entry);

// function
function greet(name: string): string {
  return "hello " + name;
}

console.log(greet("omar"));

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 4));

function log(message: string, userId?: number) {
  console.log(`[${userId || "unknown"}] ${message}`);
}

log("hello");

function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);

function arraysOfNames(...names: string[]): string | undefined {
  return names.find((name) => name === "faadumo");
}

console.log(arraysOfNames("Ali", "Ahmed", "faadumo"));

// objects

function showUsers(user: { name: string }) {
  console.log(user.name);
}

showUsers({ name: "Ali" });

// interface & type
interface Users {
  name: String;
  email: String;
  isLoggedIn: boolean;
}

function showCurrentUser(user: Users) {
  console.log(user.name, user.email, user.isLoggedIn);
}

showCurrentUser({ name: "ali", email: "omar@gmail.com", isLoggedIn: false });

// type
type userInfo = {
  name: String;
  department: String;
  location: String;
  village: String;
};

function showUserInformation(user: userInfo) {
  console.log(user.name, user.department, user.location, user.village);
}

showUserInformation({
  name: "Omar",
  department: "Computer Science",
  location: "Hodan",
  village: "Barmuudo",
});

// readonly

interface Book {
  readonly isbn: String;
  title: String;
}

const b: Book = {
  isbn: "1234567890",
  title: "Typescript hand book",
};

// Optional

interface profile {
  username: String;
  bio?: String;
}

const p1: profile = { username: "omar" };

console.log(p1);

const p2: profile = { username: "omar", bio: "i am a student" };
console.log(p2);

//& operator

interface user {
  id: number;
  user: String;
}

type Admin = user & {
  role: "admin";
};

const b1: Admin = {
    id: 1234,
    user: "omar",
    role: "admin"
}

console.log(b1);

//Generics

function echo <T>(data: T): T {
  return data;
}

const myname = echo("hello");

console.log(myname.toUpperCase());

const myAge = echo(20);
console.log(myAge);

function firstItem <T> (items: T[]): T {
  return items[0];
}

const firstNum = firstItem([1, 22, 34, 67]);
console.log(firstNum);

const firstName = firstItem(["omar", "ali"]);

console.log(firstName);

interface responseData <T> {
  success: boolean;
  data: T
}

const stringResponse: responseData<string> = {
  success: true,
  data: "john doe"
}

console.log(stringResponse);

const userResponse: responseData<{id: number, name: String}> = {
  success: false,
  data: {id: 123, name: "omar"}
}

console.log(userResponse);

//enum and as

type Role = "admin" | "user" | "guest"; 

function setRole(role: Role) {
  console.log(`current role is: ${role}`);
}

setRole("admin");

enum Roles {
  Admin = "admin",
  User = "user",
  Mentor = "mentor",
  SuperAdmin = "superadmin"
}

function currentRoles(role: Roles) {
 console.log(`set role is: ${role}`);
}

currentRoles(Roles.SuperAdmin);

const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true;