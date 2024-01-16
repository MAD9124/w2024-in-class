const pastaData = require("./pastas.json");
// console.log(pastaData);

const tim = {
  id: 1,
  name: "tim",
  status: "needs pasta",
};

const bestPasta = Object.entries(pastaData).reduce((acc, cv) =>
// 9       7
  acc[1] < cv[1] ? cv : acc
)[0];

tim.eat = bestPasta;
console.log(tim);
