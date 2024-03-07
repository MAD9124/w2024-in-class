"use strict";

const express = require("express");
const userRouter = require("./routers/user");
const app = express();

// Application level middleware here

// Routes here
app.get("/", (_req, res) => {
  res.send("Server Running..");
});

// don't forget to put router here
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
