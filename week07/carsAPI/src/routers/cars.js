"use strict";

const { Router } = require("express");
const carController = require("../controllers/cars");

const carRouter = Router();

// carRouter.route('/')
// .get(carController.getAll)
// .post(carController.create)

// carRouter.route('/:id')
//     .get(carController.getOne)
//     .put(carController.replace)
//     .patch(carController.update)
//     .delete(carController.deleteOne)

carRouter.post("/", carController.create);
carRouter.get("/", carController.getAll);

carRouter.get("/:id", carController.getOne);
carRouter.put("/:id", carController.replace);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.deleteOne);

module.exports = carRouter;
