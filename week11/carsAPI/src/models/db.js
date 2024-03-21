const mongoose = require("mongoose");
const debug = require("debug")("week11:db");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    debug("Connected to mongodb");
  })
  .catch((e) => {
    debug(e);
    process.exit(1);
  });
