const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myArray = ["js", "ruby", "python", "java", "cpp"];

for (const key in myArray) {
  console.log(myArray[key]);
}
