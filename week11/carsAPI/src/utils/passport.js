const jwt = require("jsonwebtoken");
const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

const User = require("../models/user");
const { UnauthenticatedError } = require("../middlewares/errors");

passport.use(
  new BearerStrategy(async function (token, done) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decodedToken.id);
      if (!user) {
        throw new UnauthenticatedError("Please sign in");
      }
      done(null, user);
    } catch (error) {
      done(new UnauthenticatedError("Please sign in"));
    }
  })
);
