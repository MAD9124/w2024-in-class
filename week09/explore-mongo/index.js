"use strict";

const mongoose = require("mongoose");
const catSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    lives: Number,
    favouriteFoods: [String],
  },
  {
    timestamps: true,
  }
);

const Cat = mongoose.model("Cat", catSchema);

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/explore-mongoose");

    // Get all cats
    const allCats = await Cat.find({});
    // console.log("all cats", allCats);

    // Get all cats with 9 lives
    const catsWith9Lives = await Cat.find({ lives: 9 });
    // console.log("c", catsWith9Lives);

    // Get all cats older than 9 years old
    const oldCats = await Cat.find({ age: { $gt: 9 } });
    // console.log(oldCats);

    // Get all cats whose name starts with `G`
    const gCats = await Cat.find({ name: { $regex: "^G" } });
    // console.log("g", gCats);

    // Get all cats that like tuna
    const badBreathCats = await Cat.find({ favouriteFoods: "tuna" });
    // console.log(badBreathCats);

    // Get all cats that don't like tuna
    const freshBreathCats = await Cat.find({ favouriteFoods: { $ne: "tuna" } });
    // console.log(freshBreathCats);

    // Get all cats that like potatoes or strawberry
    const nextCats = await Cat.find({
      favouriteFoods: { $in: ["potatoes", "strawberry"] },
    });
    // console.log(nextCats);

    // Get all cats that like mice and biscuits
    const specificTaste = await Cat.find({
      favouriteFoods: { $all: ["mouse", "biscuits"] },
    });
    // console.log(specificTaste);

    // Get the oldest cat
    const oldestCat = await Cat.findOne({}).sort({ age: -1 });
    // console.log(oldestCat);

    // Get the oldest cat that likes fish
    const oldFishCat = await Cat.findOne({ favouriteFoods: "fish" }).sort({
      age: -1,
    });
    // console.log(oldFishCat);

    // Get the cat with the lease lives that like milk and biscuits
    const onDeathsDoor = await Cat.findOne({
      favouriteFoods: { $all: ["milk", "biscuits"] },
    }).sort({ lives: 1 });
    console.log(onDeathsDoor);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

main();
