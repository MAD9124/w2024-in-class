"use strict";

const express = require("express");
const carRouter = require("./routers/cars");
const {
  errorHandler,
  ApiError,
  BadRequestError,
  NotFoundError,
} = require("./middlewares/errors");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/cars", carRouter);

app.get("/error", () => {
  throw new Error("Car with id 23 not found");
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
