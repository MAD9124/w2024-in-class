const os = require("os");
const path = require("path");
const fs = require("fs").promises;
const queryString = require("querystring");

// console.log(os.homedir())

// console.log(path.join(__dirname, './new-file.js'))

// console.log(1);
// fs.readFile(path.join(__dirname, "./sayHello.js"), (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(2);
//   console.log(data.toString());
// });
// console.log(3);

// const readFile = async () => {
//   console.log(1);
//   const data = await fs.readFile(path.join(__dirname, "./sayHello.js"));

//   console.log(2, data.toString());
//   console.log(3);
// };

// readFile();

// const writeFile = async () => {
//   const data = {
//     name: "tim",
//     age: 32,
//     status: "hungry",
//   };
//   await fs.writeFile(path.join(__dirname, "./data.json"), JSON.stringify(data));
// };

// writeFile()

// const myPassword = process.env.PASSWORD;
// console.log(myPassword);

// console.log(1)
// process.exit()
// console.log(2)

const myQuery =
  "q=something&oq=something&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDITCAIQLhiDARjHARixAxjRAxiABDIHCAMQABiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDIKCAYQLhjUAhiABDIKCAcQLhjUAhiABDINCAgQABiDARixAxiABDIHCAkQABiPAtIBCTEzMDBqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8";

console.log(queryString.decode(myQuery).q);

// console.log(
//   queryString.encode({
//     some: "thing",
//     arr: [1, 2, 34],
//   })
// );
