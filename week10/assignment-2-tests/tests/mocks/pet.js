const { ObjectId } = require("mongodb");
const { MOCK_OWNER_ID } = require("./user");

const MOCK_PET_ID = new ObjectId();

const mockPets = [
  {
    _id: MOCK_PET_ID,
    name: "Dylan",
    type: "dog",
    tricks: ["sit", "come"],
    owner: MOCK_OWNER_ID,
  },
  {
    name: "Garfield",
    type: "cat",
    tricks: ["eat lasagne", "sleep"],
    owner: MOCK_OWNER_ID,
  },
  {
    name: "Clifford",
    type: "dog",
    tricks: ["big", "red", "pounce"],
    owner: MOCK_OWNER_ID,
  },
  {
    name: "Eugene",
    type: "bearded dragon",
    tricks: ["sunbathe", "lick"],
    owner: MOCK_OWNER_ID,
  },
  {
    name: "Tumbleweed",
    type: "hamster",
    tricks: ["spin", "gnaw", "solve maze"],
    owner: MOCK_OWNER_ID,
  },
];

module.exports = {
  mockPets,
  MOCK_PET_ID,
};
