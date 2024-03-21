// 1 1 2 3 5 8
const fib = (n) => {

  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(205));

// for n, add all the numbers before and including n
// ex 5, 1 + 2 + 3 + 4 + 5;

// const addNums = (n) => {
//   console.log("n: ", n);
//   if (n <= 1) {
//     return 1;
//   }
//   return addNums(n - 1) + n;
// };

// console.log(addNums(5));
