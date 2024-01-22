"use strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.get("/api", (req, res) => {
  const data = { message: "Hello from express" };
  res.send({
    data,
  });
});

app.listen(4000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("App is listening on port 4000");
});
