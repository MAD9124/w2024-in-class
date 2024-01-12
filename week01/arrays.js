// let i = 0;
// while (i < 10) {
//   console.log("hello" + i);
//   //   i = i + 1
//   // i += 1;
//   i++;
// }

// for (let i = 10; i > 0; i--) {
//   console.log("hello", i);
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

const students = [
  {
    id: 1,
    name: "tim",
  },
  {
    id: 2,
    name: "chris",
  },
  {
    id: 3,
    name: "victor",
  },
  {
    id: 4,
    name: "dieudonne",
  },
  {
    id: 5,
    name: "sandra",
  },
];

// for (let i = 0; i < students.length; i++) {
//   console.log("hello", students[i]);
// }

// forEach
const val = students.forEach((student, i, arr) => {
  console.log(student);
  console.log(i);
  console.log(arr);
  console.log("\n");
});

// console.log("vvv", val); // returns undefined


