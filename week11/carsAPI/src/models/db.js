const mongoose = require("mongoose");
const logger = require("../utils/logger");
const debug = require("debug")("week11:db");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => logger.info("connected to mongodb"))
  .catch((e) => {
    logger.error(e);
    process.exit(1);
  });
