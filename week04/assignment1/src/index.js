"use strict";

const express = require("express");
const petRouter = require("./routers/pets");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/pets", petRouter);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
