// console.log(1);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("seopm,thin");
//     resolve(2);
//   }, 1000);
// });
// myPromise
//   .then((data) => {
//     console.log(data + 2);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// console.log(3);

const myAsyncFunction = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally");
  }
  console.log("finally2");
};

myAsyncFunction();
