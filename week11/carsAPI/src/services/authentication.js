const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const {
  NotFoundError,
  UnauthenticatedError,
} = require("../middlewares/errors");

const generateToken = (id) =>
  jwt.sign({ id: id.toString() }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "1 minute",
  });

const register = async (username, password) => {
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    username,
    password: hashedPassword,
  });
  const savedUser = await user.save();
  return generateToken(savedUser._id);
};

const login = async (username, password) => {
  const foundUser = await User.findOne({ username });

  if (!foundUser) {
    throw new NotFoundError(`User ${username} not found`);
  }

  const isValidPassword = await bcrypt.compare(password, foundUser.password);

  if (!isValidPassword) {
    throw new UnauthenticatedError(`Invalid username or password`);
  }

  return generateToken(foundUser._id);
};

module.exports = {
  register,
  login,
};
