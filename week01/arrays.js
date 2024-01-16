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
// const val = students.forEach((student, i, arr) => {
//   console.log(student);
//   console.log(i);
//   console.log(arr);
//   console.log("\n");
// });

// console.log("vvv", val); // returns undefined

// filter
// const newArr = students.filter((student) => student.id < 4);
// console.log(newArr, students);

// map
// const newArr = students.map((student) => ({
//   ...student,
//   grade: "A+",
// }));
// const newArr = students.map((student) =>
//   Object.assign({}, student, { grade: "B+" })
// );
// console.log(newArr);

// if (a < b) {
//   -1
// } else {
//   1
// }

// sort - mutates original array
// const sortedArray = students.sort();
// const sortedArray = students.sort((a, b) => (a.name < b.name ? 1 : -1));
// console.log(sortedArray);

// slice
// const newArr1 = students.slice(0, 2);
// console.log(newArr1);
// console.log(students);

// splice
// const newArr = students.splice(0, 2);
// console.log(newArr);
// console.log(students)

// find
// const chris = students.find(({ id }) => id === 1003);
// console.log(chris);

// findIndex
// const index = students.findIndex(({ id }) => id === 12480714);
// console.log(index);

// reduce
// const result = [1, 2, 3, 4, 5, 6, 7].reduce((accumulator, currentValue) => {
//   console.log("acc", accumulator);
//   console.log("cv", currentValue);
//   return accumulator + currentValue;
// }, 0);
// console.log(result);

// const str = students.reduce((acc, cv) => {
//   return acc + ", " + cv.name;
// }, "I had class today with: ");
// console.log(str);

// const map = students.reduce((acc, cv) => {
//   acc[cv.id] = cv;
//   return acc;
// }, {});
// console.log(map);
// console.log(students);
