const mongoose = require("mongoose");
// const debug = require("debug")("week11:db");
const logger = require("../utils/logger");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    logger.info("Connected to mongodb");
  })
  .catch((e) => {
    logger.error(e.message);
    process.exit(1);
  });
