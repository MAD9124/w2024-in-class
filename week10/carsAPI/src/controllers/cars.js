"use strict";

const carService = require("../services/cars");

const create = (req, res, next) => {
  console.log("made it to the controller!");
  try {
    const newCar = carService.create(req.body);
    res.status(201).json({
      data: newCar,
    });
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res) => {
  const cars = await carService.getAll();
  res.json({
    data: cars,
  });
};

const getOne = (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const car = carService.getOne(id);
    res.json({
      data: car,
    });
  } catch (err) {
    next(err);
  }
};

const replace = (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const updatedCar = carService.replace(id, req.body);
    res.json({
      data: updatedCar,
    });
  } catch (err) {
    next(err);
  }
};

const update = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const updatedCar = carService.update(id, req.body);
    res.json({
      data: updatedCar,
    });
  } catch (err) {
    next(err);
  }
};

const deleteOne = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedCar = carService.deleteOne(id);
  res.json({ data: deletedCar });
};

module.exports = {
  create,
  getAll,
  getOne,
  replace,
  update,
  deleteOne,
};
