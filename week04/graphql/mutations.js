"use strict";

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const drivers = require("./data/drivers");
const { DriverType } = require("./types");

const createDriver = {
  type: DriverType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    wins: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_source, { name, wins = 0 }) => {
    const id = Date.now();
    const newDriver = {
      id,
      name,
      wins,
    };
    drivers.push(newDriver);
    return newDriver;
  },
};

const deleteDriver = {
  type: DriverType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_source, { id }) => {
    const idx = drivers.findIndex((driver) => driver.id === id);
    if (idx < 0) throw new Error(`Driver with id ${id} not found`);

    const [deletedDriver] = drivers.splice(idx, 1);
    return deletedDriver;
  },
};

const updateDriver = {
  type: DriverType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    wins: { type: GraphQLString },
  },
  resolve: (_source, { id, ...rest }) => {
    const idx = drivers.findIndex((driver) => driver.id === id);
    if (idx < 0) throw new Error(`Driver with id ${id} not found`);

    Object.assign(drivers[idx], rest);

    return drivers[idx];
  },
};

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDriver,
    deleteDriver,
    updateDriver,
  },
});

module.exports = mutation;
