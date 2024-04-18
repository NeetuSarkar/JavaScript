const user = {
  username: "Neetu",
  price: 999,

  welcomeMessage: function () {
    console.log(
      `Hello ${this.username}, the price for hosting is ${this.price}`
    );
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Neetu";
//   console.log(this.username);
// }

// chai();

// const chai = () => {
//   let username = "Neetu";
//   console.log(this.username);
// };

const chai = () => {
  let username = "Neetu";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2){
//   return num1+num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => num1 + num2;

// const addTow = (num1, num2) => {
//   username: "Neetu";
// };

// console.log(addTwo(3, 4));

// const myArray = [1, 2, 3, 4]

// myArray.forEach()
