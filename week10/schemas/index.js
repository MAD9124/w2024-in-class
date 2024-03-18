const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  name: String,
});

const Owner = mongoose.model("Owner", ownerSchema);

const dogSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 64,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 100,
    required: [true, "why no bacon?"],
  },
  // Referencing way
  //   owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },

  // Embedded way
  owner: { type: ownerSchema, required: true },
});

const Dog = mongoose.model("Dog", dogSchema);

const main = async () => {
  try {
    // connect
    await mongoose.connect("mongodb://localhost:27017/test");

    // 65f3966d2f65e21380f3ad67
    // const dog = new Dog({
    //   name: "Spot",
    //   age: 5,
    //   owner: {
    //     name: "Luciano",
    //   },
    // });
    // await dog.save();

    // Referencing way
    // const dog = await Dog.findById("65f39700073907bbff620801").populate(
    //   "owner"
    // );

    // Embedded way
    const dog = await Dog.findById("65f398af26ba5cac6db8a30f");
    console.log(dog);

    // create owner
    // const owner = new Owner({ name: "Tim" });
    // await owner.save();
  } catch (err) {
    console.log(err);
  } finally {
    // disconnect
    await mongoose.disconnect();
  }
};

main();
