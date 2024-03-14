"use strict";

const pets = require("../models/pets");

const validatePet = (pet) =>
  pet.name &&
  pet.type &&
  Array.isArray(pet.tricks) &&
  pet.tricks.every((t) => typeof t === "string");

const create = (body) => {
  const id = Date.now();

  const { name, type, tricks } = body;
  const pet = {
    id,
    name,
    type,
    tricks,
  };

  if (!validatePet(pet)) {
    throw new Error(`400|Invalid input`);
  }
  pets.push(pet);
  return pet;
};

const getAll = () => pets;

const getOne = (id) => {
  const pet = pets.find((pet) => pet.id === id);
  if (!pet) {
    throw new Error(`404|pet with id ${id} not found`);
  }
  return pet;
};

const replace = (id, updates) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);
  if (petIndex < 0) {
    throw new Error(`404|pet with id ${id} not found`);
  }

  const { name, type, tricks } = updates;

  const updatedPet = {
    id,
    name,
    type,
    tricks,
  };

  if (!validatePet(updatedPet)) {
    throw new Error(`400|Invalid input`);
  }

  pets[petIndex] = updatedPet;

  return updatedPet;
};

const update = (id, updates) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);

  if (petIndex < 0) {
    throw new Error(`404|pet with id ${id} not found`);
  }

  const { name, type, tricks } = updates;
  const updatedPet = {
    ...pets[petIndex],
  };
  if (name) updatedPet.name = name;
  if (type) updatedPet.type = type;
  if (tricks) updatedPet.tricks = tricks;

  pets[petIndex] = updatedPet;

  return updatedPet;
};

const deleteOne = (id) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);

  if (petIndex < 0) {
    throw new Error(`404|pet with id ${id} not found`);
  }

  const [deletedPet] = pets.splice(petIndex, 1);

  return deletedPet;
};

module.exports = {
  create,
  getAll,
  getOne,
  replace,
  update,
  deleteOne,
};
