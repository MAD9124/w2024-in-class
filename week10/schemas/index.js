const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  name: { type: String, minLength: 3, maxLength: 64, required: true },
});

const Owner = mongoose.model("Owner", OwnerSchema);

const dogSchema = mongoose.Schema({
  name: { type: String, minLength: 3, maxLength: 64, required: true },
  age: { type: Number, min: 0, max: 100, required: true },
  tricks: [{ type: String, minLength: 3, maxLength: 64 }],
  
  // reference way
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },

  // embedded way:
  // owner: ownerSchema
});

const Dog = mongoose.model("Dog", dogSchema);

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");

    const dog = new Dog({
      name: "Dylan",
      age: 5,
      tricks: ["sit"],
      owner: "65f377b61a8cf605dfa54026",
    });
    await dog.save();

    // const dylan = await Dog.findById("65f3797d35b4289b6a7f0d68");
    // console.log(dylan);

    // const allDogs = await Dog.find({});
    // console.log("d", allDogs);

    // const owner = new Owner({
    //   name: "Tim",
    // });
    // await owner.save();
  } catch (err) {
    console.log("e", err);
  } finally {
    await mongoose.disconnect();
  }
};

main();
