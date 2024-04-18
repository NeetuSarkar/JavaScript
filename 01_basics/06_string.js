const name = "Neetu";
const repoCount = 50;
let a = 10;

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("neetu-nc-cl");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0, 5);
// console.log(newString);

// const anotherString = gameName.slice(-1, 4);
// console.log(anotherString);

const newStringOne = "   Neetu      Sarkar    ";
console.log(newStringOne.trim());

const url = "https://hitest.com/hitesh%20choudary";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

console.log(gameName.split("-"));
