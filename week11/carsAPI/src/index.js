"use strict";

require("dotenv/config");
const express = require("express");
const sanitizeMongoose = require("express-mongo-sanitize");
// const debug = require("debug")("week11");
const logger = require("./utils/logger");

require("./models/db");
const carRouter = require("./routers/cars");
const { errorHandler } = require("./middlewares/errors");
const sanitizeBody = require("./middlewares/sanitizeBody");

const app = express();
app.use(express.json());
app.use(sanitizeMongoose());
app.use(sanitizeBody);

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/cars", carRouter);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  logger.info(`App listening on port ${PORT}`);
});
