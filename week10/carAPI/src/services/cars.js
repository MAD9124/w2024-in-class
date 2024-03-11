"use strict";

const Car = require("../models/cars");
const { NotFoundError } = require("../middlewares/errors");

const create = async (body) => {
  const { make, model, colour } = body;

  const car = new Car({
    make,
    model,
    colour,
  });
  const savedCar = await car.save();

  return savedCar;
};

const getAll = async () => {
  const cars = await Car.find({});
  return cars;
};

const getOne = async (id) => {
  const car = await Car.findById(id);
  if (!car) {
    throw new NotFoundError(`Car with id ${id} not found`);
  }
  return car;
};

const replace = (id, updates) => {
  const carIndex = cars.findIndex((car) => car.id === id);
  if (carIndex < 0) {
    throw new NotFoundError(`Car with id ${id} not found`);
  }
  const { make, model, colour } = updates;

  const updatedCar = {
    id,
    make,
    model,
    colour,
  };

  cars[carIndex] = updatedCar;
};

const update = (id, updates) => {
  const carIndex = cars.findIndex((car) => car.id === id);

  if (carIndex < 0) {
    throw new NotFoundError(`Car with id ${id} not found`);
  }

  const { make, model, colour } = updates;
  const updatedCar = {
    ...cars[carIndex],
  };
  if (make) updatedCar.make = make;
  if (model) updatedCar.model = model;
  if (colour) updatedCar.colour = colour;

  cars[carIndex] = updatedCar;

  return updatedCar;
};

const deleteOne = (id) => {
  // nice try
};

module.exports = {
  create,
  getAll,
  getOne,
  replace,
  update,
  deleteOne,
};
