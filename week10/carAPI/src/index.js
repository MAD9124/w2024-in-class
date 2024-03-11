"use strict";

require("dotenv/config");
const express = require("express");

require("./models/db");
const carRouter = require("./routers/cars");
const { errorHandler } = require("./middlewares/errors");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/cars", carRouter);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
