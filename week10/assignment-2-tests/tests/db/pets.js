const { convertJSON } = require("../helpers");
const { MOCK_OWNER_ID } = require("../mocks/user");

const { Pet } = global;

const createPet = async (pet) => {
  const { insertedId } = await Pet.insertOne(pet);
  return insertedId;
};

const getPetsRaw = async () => {
  const pets = await Pet.find(
    {},
    { projection: { updatedAt: 0, createdAt: 0, __v: 0 } },
  ).toArray();

  return pets.map((p) =>
    convertJSON({
      ...p,
      _id: p._id.toString(),
    }),
  );
};

const getPets = async () => {
  const pets = await Pet.find(
    {},
    { projection: { updatedAt: 0, createdAt: 0, __v: 0 } },
  ).toArray();

  const owner = await User.findOne({ _id: MOCK_OWNER_ID });

  return pets.map((p) =>
    convertJSON({
      ...p,
      _id: p._id.toString(),
      owner,
    }),
  );
};

module.exports = {
  createPet,
  getPetsRaw,
  getPets,
};
