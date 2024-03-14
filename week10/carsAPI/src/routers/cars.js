"use strict";

const { Router } = require("express");

const carController = require("../controllers/cars");
const validateCarData = require("../middlewares/validateCarData");

const carRouter = Router();

carRouter.post("/", validateCarData, carController.create);
carRouter.get("/", carController.getAll);
carRouter.get("/:id", carController.getOne);
carRouter.put("/:id", validateCarData, carController.update);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.deleteOne);

module.exports = carRouter;
