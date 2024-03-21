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

const update = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedCar = await carService.update(id, req.body);
    res.json({
      data: updatedCar,
    });
  } catch (err) {
    next(err);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedCar = await carService.deleteOne(id);
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
  update,
  deleteOne,
};
