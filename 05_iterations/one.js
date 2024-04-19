// for Loop

// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Multiplication Table of: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  // console.log(myArray[index]);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of i is ${i}`);
}
