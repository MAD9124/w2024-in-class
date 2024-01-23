const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.get("/api", (req, res) => {
  const data = {
    message: "Hello from express!",
  };
  res.status(200).send({ data });
});

app.get("/tim", (req, res) => {
  res.send({
    data: {
      message: "Tim is cool :D",
    },
  });
});

app.listen(4000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is listening on port 4000");
});
