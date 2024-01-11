function addTwoNumbers(a, b) {
  return a + b;
}

// console.log(1 + 2);
// console.log(addTwoNumbers(1, 2));

// console.log(4 + 3);
// console.log(addTwoNumbers(4, 3));

// console.log(4412 + 31233);
// console.log(addTwoNumbers(4412, 31233));

const subtractTwoNumbers = (a, b) => {
  return a - b;
};

// console.log('SUBTRACTING \n')

// console.log(subtractTwoNumbers(10, 2))
// console.log(subtractTwoNumbers(2,6))

// class TestClass {
//   constructor(name) {
//     this.name = name;
//   }

//   method() {
//     return this;
//   }

//   method2 = () => {
//     return this;
//   };
// }

// const test = new TestClass("test");

// console.log(test.method2());

// function test1() {
//   console.log(this);
// }

// const test2 = () => {
//   console.log(this);
// };

// const testObject = {
//   test1: test1,
//   test2: test2,
// };

// testObject.test1();
// testObject.test2();

console.log(this)
console.log(globalThis)