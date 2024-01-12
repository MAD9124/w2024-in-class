function test1() {
  console.log("test1", this);
}

const test2 = () => {
  console.log("test2", this);
};

const obj = {
  test1: test1,
  test2: test2,
};

// console.log(this);
// obj.test1();
// obj.test2();

const test = (input) => input + 2

console.log(test(123))