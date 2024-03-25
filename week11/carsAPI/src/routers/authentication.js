"use strict";

const { Router } = require("express");

const authController = require("../controllers/authentication");

const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
