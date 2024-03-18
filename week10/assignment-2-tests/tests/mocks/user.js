const { ObjectId } = require("mongodb");

const MOCK_OWNER_ID = new ObjectId("65f4b6e63d390f0884f0e107");

const mockUsers = [
  {
    _id: MOCK_OWNER_ID,
    firstName: "Tim",
    lastName: "Robillard",
    email: "tim@test.ca",
  },
  {
    firstName: "Vincent",
    lastName: "Chevalier",
    email: "vincent@test.ca",
  },
  {
    firstName: "Eduardo",
    lastName: "Sousa",
    email: "eduardo@test.ca",
  },
  {
    firstName: "Luciano",
    lastName: "Saavedra",
    email: "luciano@test.ca",
  },
];

module.exports = {
  MOCK_OWNER_ID,
  mockUsers,
};
