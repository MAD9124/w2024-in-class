// 1 1 2 3 5 8 13 ...

const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(58));

// 1 + 2 + 3 + 4 + 5
const getSums = (n) => {
  if (n === 1) {
    return 1;
  }
  return getSums(n - 1) + n;
};

console.log(getSums(50000))