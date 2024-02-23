"use strict";

const express = require("express");
const carRouter = require('./routers/cars');

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use('/api/cars', carRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
