// console.log(1);

// const result = new Promise((resolve, reject) => {
//   reject(2);
// });

// console.log(result);
// console.log(3);

function waitFor2Seconds(data) {
  return new Promise((res, rej) => {
    setTimeout(() => rej(data), 2000);
  });
}

// console.log(
//   waitFor2Seconds("vincent")
//     .then((data) => {
//       console.log("data", data);
//     })
//     .catch((err) => {
//       console.log("error", err);
//     })
//     .finally(() => {
//       console.log("I am here");
//     })
// );

// fetch("https://pokeapi.co/api/v2/ability/").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/ability/");
    throw new Error("muahahah");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("I am always here");
  }
};

getPokemon();
