"use strict";

const express = require("express");
const mainRouter = require('./routers/main');

const app = express();

// Application level
app.use(express.json());
app.use((request, response, next) => {
  console.log(
    `[Incoming request] ${new Date().toUTCString()} - ${request.url}`
  );
  next();
});

app.use((request, response, next) => {
  request.fun = true;
  next();
});

app.use('/test', mainRouter)

app.get("/", (req, res) => {
  console.log('test', req.test)
  res.send("Server running 🚀🚀🚀");
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
