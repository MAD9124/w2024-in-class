"use strict";

const express = require("express");
const morgan = require("morgan");

const carRouter = require("./routers/cars");

const app = express();
app.use(morgan("tiny"));
// app.use((req, res, next) => {
//   console.log(`Incoming request [${new Date().toUTCString()}] ${req.path}`);
//   next();
// });

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("this is some application level middleware");
//   next();
// });

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/cars", carRouter);

app.use((req, res, next) => {
  console.log("this is some application level middleware");
  next();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
