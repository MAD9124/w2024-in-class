"use strict";

require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const expressMongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
require("./models/db");

const debug = require("debug")("week11");

const carRouter = require("./routers/cars");
const { errorHandler } = require("./middlewares/errors");
const sanitizeBody = require("./middlewares/sanitizeBody");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use(expressMongoSanitize());
app.use(sanitizeBody);

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? process.env.CORS_WHITELIST : "*",
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
  app.use(compression());
}

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/cars", carRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  debug(`Server listening on port ${PORT}`);
});
