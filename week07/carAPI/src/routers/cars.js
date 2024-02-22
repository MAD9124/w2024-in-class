"use strict";

const { Router } = require("express");
const carController = require("../controllers/cars");
const validateCar = require("../middlewares/validateCar");

const carRouter = Router();

carRouter.post("/", validateCar, carController.create);
carRouter.get("/", carController.getAll);
carRouter.get("/:id", carController.getOne);
carRouter.put("/:id", validateCar, carController.replace);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.deleteOne);

module.exports = carRouter;
