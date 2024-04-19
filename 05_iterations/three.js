// for of

// ["", "", ""];
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  // console.log(i);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  // console.log(greet);
}

// Maps

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set("d", 4);
// map.set("a", 5);

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":", value);
}

const myObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// for (const [key, value] of myObject) {
//   console.log(key, ":", value);
// }
