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
    await mongoose.connect("mongodb://localhost:27017/explore-mongo");

    // Get all cats
    const allCats = await Cat.find({});
    // console.log(allCats);

    // Get all cats with 9 lives
    const cats9 = await Cat.find({ lives: 9 });
    // console.log(cats9);

    // Get all cats older than 9 years old
    const oldCats = await Cat.find({ age: { $gt: 9 } });
    // console.log(oldCats);

    // Get all cats whose name starts with `G`
    const gCats = await Cat.find({ name: /^G/ });
    // console.log(gCats);

    // Get all cats that like tuna
    const tunaCats = await Cat.find({ favouriteFoods: "tuna" });
    // console.log(tunaCats);

    // Get all cats that don't like tuna
    const noTunaCats = await Cat.find({
      favouriteFoods: { $ne: "tuna" },
    });
    // console.log(noTunaCats);

    // Get all cats that like potatoes or strawberry
    const cats = await Cat.find({
      favouriteFoods: { $in: ["potatoes", "strawberry"] },
    });
    // console.log(cats);

    // Get all cats that like mice and biscuits
    const mbCats = await Cat.find({
      favouriteFoods: { $all: ["mouse", "biscuits"] },
    });
    // console.log(mbCats);

    // Get the oldest cat
    const oldestCat = await Cat.findOne({}).sort({ age: -1 });
    // console.log(oldestCat);

    // Get the oldest cat that likes fish
    const oldestCatFish = await Cat.findOne({ favouriteFoods: "fish" }).sort({
      age: -1,
    });
    // console.log(oldestCatFish);

    // Get the cat with the least lives that like milk and biscuits
    const asdfasdf = await Cat.findOne({
      favouriteFoods: { $all: ["milk", "biscuits"] },
    }).sort({ lives: 1 });
    console.log(asdfasdf);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

main();
