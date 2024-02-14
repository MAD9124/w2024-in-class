require("dotenv/config");
const express = require("express");
const cors = require("cors");

const walkRouter = require("./routers/walk");
const redisService = require("./services/redisService");

redisService.init();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/walk", walkRouter);

app.get("/test", (req, res) => {
  res.send(req.query);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
