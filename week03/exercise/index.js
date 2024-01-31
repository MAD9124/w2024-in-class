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
        message: "Invalid input, Make, Model and Colour required",
      },
    });
    return;
  }

  const newCar = {
    id,
    make,
    model,
    colour,
  };

  cars.push(newCar);
  res.status(201).json({
    data: newCar,
  });
}); // create a new car

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
app.put("/api/cars/:id", (req, res) => {
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

  const { make, model, colour } = req.body;

  if (!make || !model || !colour) {
    res.status(400).json({
      error: {
        message: "Invalid input, Make, Model and Colour required",
      },
    });
    return;
  }

  const newCar = {
    id,
    make,
    model,
    colour,
  };

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
      error: { message: `Car with id ${id} not found` },
    });
    return;
  }
  const { make, model, colour } = req.body;
  // const updateCar2 = cars[carIndex];
  // if (make) updateCar2.make = make;
  // if (model) updateCar2.model = model;
  // if (colour) updateCar2.colour = colour;
  const updatedCar = {
    ...cars[carIndex],
    ...(make && { make }),
    ...(model && { model }),
    ...(colour && { colour }),
  };

  cars[carIndex] = updatedCar;
  res.json({
    data: updatedCar,
  });
}); // update some properties of a car

// D - delete
app.delete("/api/cars/:id", (req, res) => {}); // destroy the record for a car

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
