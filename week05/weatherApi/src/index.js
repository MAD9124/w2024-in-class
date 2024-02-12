require("dotenv/config");
const express = require("express");

const walkRouter = require("./routers/walk");
const redisService = require("./services/redisService");

redisService.init();

const app = express();
app.use(express.json());

app.use("/api/walk", walkRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
