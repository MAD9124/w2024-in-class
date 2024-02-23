"use strict";

const { Router } = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const carController = require("../controllers/cars");
const validateCarData = require("../middlewares/validateCarData");

const carRouter = Router();

// carRouter.use((req, res, next) => {
//   console.log("this is the car router");
//   if (req.headers.tim !== "cool") {
//     res.status(401).json({
//       error: {
//         message: "Unauthenticated",
//       },
//     });
//     return;
//   }
//   next();
// });

carRouter.post("/image", upload.single("image"), carController.uploadImage);

carRouter.post("/", validateCarData, carController.create);
carRouter.get("/", carController.getAll);

carRouter.get("/:id", carController.getOne);
carRouter.put("/:id", validateCarData, carController.replace);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.deleteOne);

module.exports = carRouter;
