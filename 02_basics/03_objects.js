// Singleton

// object literals
// Object.create

const mySym = Symbol("key1");

const user = {
  name: "Neetu Sarkar",
  age: 23,
  [mySym]: "mykey1",
  location: "banglore",
  email: "neetusarkar202@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(user.name);
// console.log(user["email"]);
// console.log(user[mySym]);

user.email = "neetusarkarmartin9@gmail.com";
// Object.freeze(user);
user.email = "neetusarkar202@gmail.com";
console.log(user.email);

user.greeting = function () {
  console.log("Hello, Js user");
};

user.greeting2 = function () {
  console.log(`Hello Js User, ${this.name}`);
};
console.log(user.greeting2());
console.log(user.greeting());
