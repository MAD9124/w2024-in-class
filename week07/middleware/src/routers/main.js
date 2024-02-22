"use strict";

const { Router } = require("express");

const mainRouter = Router();

mainRouter.use((req, res, next) => {
  req.test = "This is router level middleware";
  next();
});

mainRouter.get(
  "/one",
  (req, res, next) => {
    req.test2 = "This is inline middleware";
    next();
  },
  (req, res) => {
    console.log("test", req.test);
    console.log("test2", req.test2);
    res.json({ data: "one" });
  }
);

mainRouter.get("/two", (req, res) => {
  console.log("test", req.test);
  console.log("test2", req.test2);
  res.json({ data: "two" });
});

module.exports = mainRouter;
