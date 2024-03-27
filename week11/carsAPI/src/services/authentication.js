const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { UnauthenticatedError } = require("../middlewares/errors");

const generateToken = (_id) =>
  jwt.sign({ id: _id.toString() }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: 1000 * 60,
  });

const login = async (username, password) => {
  const foundUser = await User.findOne({ username });

  if (!foundUser) {
    throw new UnauthenticatedError("Invalid input");
  }

  const isValidPassword = bcrypt.compareSync(password, foundUser.password);
  if (!isValidPassword) {
    throw new UnauthenticatedError("Invalid input");
  }
  return generateToken(foundUser._id);
};

const register = async (username, password) => {
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    username,
    password: hashedPassword,
  });
  const savedUser = await user.save();
  return generateToken(savedUser._id);
};

module.exports = {
  login,
  register,
};
