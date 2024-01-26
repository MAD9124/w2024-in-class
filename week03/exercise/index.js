"use strict";

const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
