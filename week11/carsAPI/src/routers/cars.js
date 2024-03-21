"use strict";

const { Router } = require("express");

const carController = require("../controllers/cars");
const validateCar = require("../middlewares/validateCar");
const isValidObjectId = require("../middlewares/isValidObjectId");

const carRouter = Router();

carRouter.post("/", validateCar, carController.create);
carRouter.get("/", carController.getAll);

carRouter.get("/:id", isValidObjectId, carController.getOne);
carRouter.put("/:id", isValidObjectId, validateCar, carController.update);
carRouter.patch("/:id", isValidObjectId, carController.update);
carRouter.delete("/:id", isValidObjectId, carController.deleteOne);

module.exports = carRouter;
