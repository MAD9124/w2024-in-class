"use strict";

const { NotFoundError, BadRequestError } = require("../middlewares/errors");
const Car = require("../models/cars");

const create = async (body) => {
  const car = new Car(body);
  const newCar = await car.save();

  return newCar;
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

const update = async (id, updates) => {
  const updatedCar = await Car.findByIdAndUpdate(id, updates, {
    new: true,
  });
  if (!updatedCar) {
    throw new NotFoundError(`Car with id ${id} not found`);
  }
  return updatedCar;
};

const deleteOne = async (id) => {
  const deletedCar = await Car.findByIdAndDelete(id);
  if (!deletedCar) {
    throw new NotFoundError(`Car with id ${id} not found`);
  }
  return deletedCar;
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deleteOne,
};
