"use strict";

const express = require("express");
const cars = require("./cars");

const app = express();

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

// C - create
app.post("/api/cars/", (req, res) => {}); // create a new car

// R - read (all)
app.get("/api/cars/", (req, res) => {
  res.json({
    data: cars,
  });
}); // return a collection of cars

// R - read (one)
app.get("/api/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find((car) => car.id === id);

  // TODO error handling / send a 404 not found

  res.json({
    data: car,
  });
}); // return the car matching the id value

// U - update (replace)
app.patch("/api/cars/:id", (req, res) => {}); // update some properties of a car

// U - update (edit)
app.put("/api/cars/:id", (req, res) => {}); // replace all properties of a car

// D - delete (one)
app.delete("/api/cars/:id", (req, res) => {}); // destroy the record for a car

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
