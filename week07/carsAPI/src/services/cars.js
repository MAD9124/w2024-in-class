"use strict";

const { NotFoundError, BadRequestError } = require("../middlewares/errors");
const cars = require("../models/cars");

const create = (body) => {
  const id = Date.now();
  const { make, model, colour } = body;

  const newCar = {
    id,
    make,
    model,
    colour,
  };

  cars.push(newCar);

  return newCar;
};

const getAll = () => cars;

const getOne = (id) => {
  const car = cars.find((car) => car.id === id);
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
  if (!make || !model || !colour) {
    throw new BadRequestError("Invalid input, Make, Model and Colour required");
  }
  const updatedCar = {
    id,
    make,
    model,
    colour,
  };

  cars[carIndex] = updatedCar;
  return updatedCar;
};

const update = (id, updates) => {
  const carIndex = cars.findIndex((car) => car.id === id);

  if (carIndex < 0) {
    throw new NotFoundError(`Car with id ${id} not found`);
  }
  const { make, model, colour } = updates;
  const updatedCar = {
    ...cars[carIndex],
    ...(make && { make }),
    ...(model && { model }),
    ...(colour && { colour }),
  };

  cars[carIndex] = updatedCar;
  return updatedCar;
};

const deleteOne = (id) => {};

module.exports = {
  create,
  getAll,
  getOne,
  replace,
  update,
  deleteOne,
};
