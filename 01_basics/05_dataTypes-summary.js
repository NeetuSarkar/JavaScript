//  Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt
let a = 10;
// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; //undefined

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 70773369129556030893n;
// console.log(bigNumber);

// // Reference (Non Primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga", "bheem", "Arjun"];

// const obj = {
//   name: "Neetu Sarkar",
//   age: 22,
// };

// const fun = function add(num1, num2) {
//   return num1 + num2;
// };

// console.log(fun(1, 2));

// console.log(typeof bigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "neetusarkardotcom";

let anothername = myYoutubename;
anothername = "neetusarkar202";

console.log(myYoutubename);
console.log(anothername);

let user1 = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let user2 = user1;

user2.email = "neetusarkar@gmail.com";

console.log(user2);
console.log(user1);
