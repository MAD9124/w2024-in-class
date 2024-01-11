const arr = [
  {
    id: 1,
    name: "tim",
    grade: "A+",
  },
  {
    id: 2,
    name: "mathieu",
  },
  {
    id: 3,
    name: "lulu",
  },
  {
    id: 4,
    name: "gina",
  },
];

// console.log(arr[3])

// find
// const student = arr.find((value) => value.name === "mathieu"); // best practice to use unique value
// const student = arr.find(value => value.id === 2);

// object destructuring
const student = arr.find(({ id }) => id === 2);
// console.log(student);

const obj = {
  foo: "foo",
  bar: "bar",
  buzz: "buzz",
};

const { foo, bar } = obj;

// console.log(foo, bar);

// filter
const noMathieus = arr.filter((value) => {
  // will keep the element that returns a truthy value
  return value.name !== "mathieu";
});
// const filteredArr = arr.filter(({ grade }) => grade);

const filteredArr = arr.filter((_, i) => i % 2);

// console.log(filteredArr);

// some
const classHasLulu = arr.some(({ name }) => name === "eason");
// console.log(classHasLulu);

// every
const allNamedTim = arr.every(({ name }) => {
  //   console.log("name", name);
  return name === "tim";
});
// console.log(allNamedTim);

const allHaveName = arr.every(({ name }) => {
  //   console.log("name", name);
  return name;
});
// console.log(allHaveName);

// map
const newArr = arr.map((value) => {
  value.attendance = true;
  return value;
});
// console.log(newArr);

const names = arr.map((value) => {
  return value.name;
});
// console.log(arr);
// console.log(names);

// forEach
arr.forEach((value, i) => {
  // do something with that value
  if (value.grade) return;
  value.grade = "A+";
});

console.log(arr);

// strings '' = false
// strings 'adsad' = true
// numbers 0 = false
// numbers 1 = true
// undefined = false
// null = false
// console.log(Boolean({}));
