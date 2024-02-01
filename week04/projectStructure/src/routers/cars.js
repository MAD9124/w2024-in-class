"use strict";

const { Router } = require("express");
const carController = require("../controllers/cars");

const carRouter = Router();

carRouter.post("/", carController.create);
carRouter.get("/", carController.getAll);
carRouter.get("/:id", carController.getOne);
carRouter.put("/:id", carController.replace);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.deleteOne);

module.exports = carRouter;
