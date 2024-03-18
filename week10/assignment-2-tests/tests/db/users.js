const { convertJSON } = require("../helpers");

const { User } = global;

const createUser = async (user) => {
  const { insertedId } = await User.insertOne(user);
  return insertedId;
};

const getUsers = async () => {
  const users = await User.find(
    {},
    { projection: { updatedAt: 0, createdAt: 0, __v: 0 } },
  ).toArray();

  return users.map(convertJSON);
};

module.exports = {
  createUser,
  getUsers,
};
