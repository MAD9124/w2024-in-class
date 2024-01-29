"use strict";

const express = require("express");
const cars = require("./cars");

const app = express();

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

// C - create
app.post("/api/cars/", (req, res) => {}); // create a new car

// R - read (many)
app.get("/api/cars/", (_req, res) => {
  res.json({
    data: cars,
  });
}); // return a collection of cars

// R - read (one)
app.get("/api/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find((car) => car.id === id);

  if (!car) {
    res.status(404).json({
      error: {
        message: `Car with id ${id} not found`,
      },
    });
    return;
  }

  res.json({
    data: car,
  });
}); // return the car matching the id value

// U - update (replace)
app.put("/api/cars/:id", (req, res) => {}); // replace all properties of a car

// U - update (edit)
app.patch("/api/cars/:id", (req, res) => {}); // update some properties of a car

// D - delete
app.delete("/api/cars/:id", (req, res) => {}); // destroy the record for a car

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
