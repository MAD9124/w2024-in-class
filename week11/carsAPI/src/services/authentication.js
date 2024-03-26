const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { UnauthenticatedError } = require("../middlewares/errors");

const login = async (username, password) => {
  const foundUser = await User.findOne({ username });

  if (!foundUser) {
    throw new UnauthenticatedError("Invalid input");
  }

  const isValidPassword = bcrypt.compareSync(password, foundUser.password);
  if (!isValidPassword) {
    throw new UnauthenticatedError("Invalid input");
  }
  return foundUser;
};

const register = async (username, password) => {
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    username,
    password: hashedPassword,
  });
  const savedUser = await user.save();
  return savedUser;
};

module.exports = {
  login,
  register,
};
