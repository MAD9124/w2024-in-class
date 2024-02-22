"use strict";

const { Router } = require("express");

const carRouter = Router();

carRouter.post('/', carController.create)
carRouter.put('/', carController.create)