"use strict";

const { Router } = require("express");
const multer = require("multer");

const carController = require("../controllers/cars");
const validateCar = require("../middlewares/validateCar");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage,
limits: {

}});

const carRouter = Router();

carRouter.post("/upload-image", upload.array("potato"), (req, res) => {
  console.log("file", req.file);
  res.json({
    data: "success",
  });
});

carRouter.post("/", validateCar, carController.create);
carRouter.get("/", carController.getAll);
carRouter.get("/:id", carController.getOne);
carRouter.put("/:id", validateCar, carController.replace);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.deleteOne);

module.exports = carRouter;

function hello(name) {
  console.log('hello ' + name )
}

function test(cb1, cb2) {
  cb1('hello')
  cb2('world')
}

test(hello, hello)

