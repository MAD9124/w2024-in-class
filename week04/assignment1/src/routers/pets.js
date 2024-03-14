"use strict";

const { Router } = require("express");
const petController = require("../controllers/pets");

const petRouter = Router();

petRouter.post("/", petController.create);
petRouter.get("/", petController.getAll);
petRouter.get("/:id", petController.getOne);
petRouter.put("/:id", petController.replace);
petRouter.patch("/:id", petController.update);
petRouter.delete("/:id", petController.deleteOne);

module.exports = petRouter;
