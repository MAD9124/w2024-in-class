"use strict";

const carService = require("../services/cars");

const errorHandler = (err) => {
  const [errorStatus, message] = err.message?.split("|");
  const status = Number(errorStatus);
  if (isNaN(status)) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
  return { status, message };
};

const create = (req, res) => {
  try {
    const newCar = carService.create(req.body);
    res.status(201).json({
      data: newCar,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const getAll = (_req, res) => {
  const cars = carService.getAll();
  res.json({
    data: cars,
  });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const car = carService.getOne(id);
    res.json({
      data: car,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const replace = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedCar = carService.replace(id, req.body);
    res.json({
      data: updatedCar,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedCar = carService.update(id, req.body);
    res.json({
      data: updatedCar,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const deleteOne = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedCar = carService.deleteOne(id);
    res.json({
      data: deletedCar,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
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
