"use strict";

const petService = require("../services/pets");

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
    const newpet = petService.create(req.body);
    res.status(201).json({
      data: newpet,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const getAll = (_req, res) => {
  const pets = petService.getAll();
  res.json({
    data: pets,
  });
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const pet = petService.getOne(id);
    res.json({
      data: pet,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const replace = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedPet = petService.replace(id, req.body);
    res.json({
      data: updatedPet,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedPet = petService.update(id, req.body);
    res.json({
      data: updatedPet,
    });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

const deleteOne = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedPet = petService.deleteOne(id);
    res.json({
      data: deletedPet,
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
