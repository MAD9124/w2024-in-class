"use strict";

const { Router } = require("express");

const carController = require("../controllers/cars");
const validateCarData = require("../middlewares/validateCarData");
const isValidObjectId = require("../middlewares/isValidObjectId");

const carRouter = Router();

carRouter.post("/", validateCarData, carController.create);
carRouter.get("/", carController.getAll);

carRouter.get("/:id", isValidObjectId, carController.getOne);
carRouter.put("/:id", isValidObjectId, validateCarData, carController.update);
carRouter.patch("/:id", isValidObjectId, carController.update);
carRouter.delete("/:id", isValidObjectId, carController.deleteOne);

module.exports = carRouter;
