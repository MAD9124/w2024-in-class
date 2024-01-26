// // 1
const students = require("./students.json");

// // 2
// students.forEach(({ firstName, lastName }) => {
//   console.log(`Hello ${firstName} ${lastName}`);
// });

// // 3
// const count = students.reduce(
//   (total, { lastName }) => total + lastName.startsWith("D"),
//   0
// );
// console.log(`\nCount of last names starting with D is ${count}`);

// // 4
// const emails = students.map(
//   ({ firstName }) => `${firstName.toLowerCase()}@algonquincollege.com`
// );

// //
// console.log("\n", emails);

let count = 0;

const emails = students.reduce((emailArr, { firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
  if (lastName.startsWith("D")) count += 1;
  emailArr.push(`${firstName}@algonquinCollege.com`);
  return emailArr;
}, []);

console.log(`\nCount of last names starting with D is ${count}`);
console.log("\n", emails);
