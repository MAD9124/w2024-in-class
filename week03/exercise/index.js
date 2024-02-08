"use strict";

const express = require("express");
const cars = require("./cars");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

// C - create
app.post("/api/cars/", (req, res) => {
  const id = Date.now();
  const { make, model, colour } = req.body;
  if (!make || !model || !colour) {
    res.status(400).json({
      error: {
        message: "Invalid input",
      },
    });
    return;
  }
  const car = {
    id,
    make,
    model,
    colour,
  };
  cars.push(car);

  res.status(201).json({
    data: car,
  });
}); // create a new car

// R - read (all)
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
app.put("/api/cars/:id", (req, res) => {
  // 1 retrieve the id
  const id = parseInt(req.params.id);

  // 2 find the matching car
  const carIndex = cars.findIndex((car) => car.id === id);

  // 3 get the new car
  // TODO add validation
  const newCar = {
    id,
    ...req.body,
  };

  // 4 replace the car in the array
  cars[carIndex] = newCar;

  res.json({
    data: newCar,
  });
}); // replace all properties of a car

// U - update (edit)
app.patch("/api/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const carIndex = cars.findIndex((car) => car.id === id);

  if (carIndex < 0) {
    res.status(404).json({
      error: {
        message: `Car with id ${id} not found`,
      },
    });
    return;
  }
  const newCar = {
    ...cars[carIndex],
    ...req.body,
  };

  cars[carIndex] = newCar;

  res.json({
    data: newCar,
  });
}); // update some properties of a car

// D - delete
app.delete("/api/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const carIndex = cars.findIndex(car => car.id === id);

  if (carIndex < 0 ) {
    res.status(404).json({ error: { message: `Car with id ${id} not found` } });
    return;
  }

  const [deletedCar] = cars.splice(carIndex, 1);
  res.json({ data: deletedCar });
}); // destroy the record for a car

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
