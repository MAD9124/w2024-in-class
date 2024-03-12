"use strict";

const express = require("express");
const morgan = require("morgan");

const carRouter = require("./routers/cars");
const { errorHandler } = require("./middlewares/errors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/cars", carRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
