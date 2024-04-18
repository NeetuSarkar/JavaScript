function sayMyName() {
  console.log("N");
  console.log("E");
  console.log("E");
  console.log("T");
  console.log("U");
}

// sayMyName();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

function add(num1, num2) {
  return num1 + num2;
}

const result = add(5, 5);

// console.log(result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in`;
}

// // console.log(loginUserMessage("Neetu"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "neetu",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `User name is ${anyobject.username} and price is ${anyobject.prices}`
  );
}

// handleObject(user);

const myNewArray = [200, 400, 100, 600];

function handleArray(anyarray) {
  return anyarray[1];
}

console.log(handleArray(myNewArray));
