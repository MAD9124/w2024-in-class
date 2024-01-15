let name = "tim";
const age = 32;

if (age > 30) {
  name = "old man tim";
  // console.log(name)
  const dogsName = "dylan";
}

// console.log(name)
// console.log(dogsName)

// equals  ==
// STRICT equals  === USE THIS ONE
// console.log(1 === "1");
// console.log(1 == "1");

// less than <
// less than or equal <=
// greater than >
// greater than or equal >=

// console.log(1 < 1)
// console.log(1 <= 1)

// AND &&
// console.log( true && true)
// console.log( true && false)
// console.log( false && true)
// console.log( false && false)

const something = false && "tim";
const somethingElse = true && "tim";

// console.log(something)
// console.log(somethingElse)
const someValue = "";

// const obj = {
//   test: "123",
//   ...(someValue && { someValue }),
// };

// console.log(obj)

const obj = {
  test: "123",
};
const obj2 = {
  some: "thing",
  some2: "thing",
};

// console.log("assign", Object.assign({}, obj, obj2));

// console.log({
//   // spreader operator
//   ...obj,
//   ...obj2,
// });

// OR ||
// console.log( true || true) // true
// console.log( true || false) // true
// console.log( false || true) // true
// console.log( false || false) // false

const cellPhone = 12341234;
const homePhone = 0;

// const myNumber = homePhone || cellPhone
// nullish coalescing operator
const myNumber = homePhone ?? cellPhone;
// console.log(myNumber)

const errorObj = {
  name: "tim",
  age: 1
};

// console.log(errorObj.test?.something);

// sets
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.has(7));
console.log(mySet.values());

// maps
const myMap = new Map();
myMap.set("name", "vincent");
myMap.
console.log(myMap.has("name"));
