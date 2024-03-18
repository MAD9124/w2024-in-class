require("dotenv/config");
const mongodb = require("mongodb");

console.log(process.env.MONGO_URL);
const client = new mongodb.MongoClient(process.env.MONGO_URL);
const db = client.db(process.env.TEST_DB);

global.User = db.collection("users");
global.Pet = db.collection("pets");

const petFns = require("./pets");
const userFns = require("./users");

const dropDbs = async () => {
  await User.deleteMany({});
  await Pet.deleteMany({});
};

const disconnect = async () => {
  client.close();
};

module.exports = {
  disconnect,
  dropDbs,
  ...petFns,
  ...userFns,
};
