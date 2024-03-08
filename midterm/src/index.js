require("dotenv/config");
const express = require("express");
const cors = require("cors");

const router = require("./router/index.js");
const redisService = require('./services/redisService.js')

const main = async () => {
  const app = express();
  await redisService.init();

  app.use(cors());

  app.get("/", (_req, res) => {
    res.send("API running");
  });
  
  app.use("/api", router);

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
};

main();
