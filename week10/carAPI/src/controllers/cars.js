"use strict";

const carService = require("../services/cars");

const create = async (req, res, next) => {
  try {
    const newCar = await carService.create(req.body);
    res.status(201).json({
      data: newCar,
    });
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const cars = await carService.getAll();
    res.json({
      data: cars,
    });
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = await carService.getOne(id);
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
  const id = parseInt(req.params.id);
  try {
    const updatedCar = carService.update(id, req.body);
    res.json({
      data: updatedCar,
    });
  } catch (err) {
    next(err);
  }
};

const deleteOne = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const deletedCar = carService.deleteOne(id);
    res.json({
      data: deletedCar,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  replace,
  update,
  deleteOne,
};
