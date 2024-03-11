"use strict";

const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const catSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    lives: Number,
    favouriteFoods: [String],
  },
  {
    timestamps: true,
  },
);

const Cat = mongoose.model("Cat", catSchema);
const foodOpts = [
  "fish",
  "milk",
  "cat nip",
  "mouse",
  "rat",
  "biscuits",
  "tuna",
  "sushi",
  "potatoes",
  "cereal",
  "strawberry",
  "souls",
];

const main = async () => {
  const c = await mongoose.connect(
    "mongodb://localhost:27017/explore-mongoose",
  );
  console.log("connected to mongo");

  try {
    const bulkUpdates = [];
    for (let i = 0; i < 10000; i++) {
      bulkUpdates.push({
        name: faker.person.firstName(),
        age: faker.number.int({
          min: 1,
          max: 20,
        }),
        lives: faker.number.int({
          min: 1,
          max: 9,
        }),
        favouriteFoods: faker.helpers.arrayElements(foodOpts, {
          min: 1,
          max: 3,
        }),
      });
    }
    await Cat.insertMany(bulkUpdates);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

main();
