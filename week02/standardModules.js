const fs = require("fs").promises;
const path = require("path");
const os = require("os");
const queryString = require("querystring");

const myQueries = {
  search: "how to write code",
  page: 1,
  results: 10,
  sort: "best",
};

// console.log(queryString.encode(myQueries));

const someQuery = 'search=how%20to%20write%20code&page=1&results=10&sort=best'

console.log(queryString.decode(someQuery))

// console.log(os.release())

// console.log(path.)

// const fs = async () => {
//   console.log(1);

//   // fs.readFile(path.join(__dirname, './defaults.js'), (err, data) => {
//   //     if (err) {
//   //         console.log(err);
//   //         return;
//   //     }
//   //     console.log(2, data.toString())
//   // })
//   const data = await fs.readFile(path.join(__dirname, "./defaults.js"));
//   console.log(2, data.toString());
//   console.log(3);
// };

// fs();

// const fs2 = async () => {
//   const myData = {
//     name: "Tim",
//     age: 32,
//   };
//   await fs.writeFile(
//     path.join(__dirname, "./myData.json"),
//     JSON.stringify(myData)
//   );
// };

// fs2();
