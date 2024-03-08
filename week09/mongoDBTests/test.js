"use strict";

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.error(`Error connecting to mongodb: ${e.message}`));

const Cat = mongoose.model("Cat", { name: String });

const main = async () => {
  try {
    const kitty = new Cat({
      name: "Top Cat",
    });
    const savedKitty = await kitty.save();
    console.log("saved", savedKitty);
  } catch (e) {
    console.error("e", e.message);
  } finally {
    await mongoose.disconnect();
  }
};

main();
