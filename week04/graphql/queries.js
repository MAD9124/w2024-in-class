"use strict";

const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLError,
} = require("graphql");
const cars = require("./data/cars");
const drivers = require("./data/drivers");
const { DriverType, CarType } = require("./types");

const getCar = {
  type: CarType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_source, { id }) => {
    const car = cars.find((car) => car.id === id);
    if (!car) throw new GraphQLError(`Car with id ${id} not found`);

    return car;
  },
};

const getCars = {
  type: new GraphQLList(CarType),
  resolve: () => cars,
};

const getDriver = {
  type: DriverType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_source, { id }) => {
    const driver = drivers.find((driver) => driver.id === id);
    if (!driver) throw new GraphQLError(`Driver with id ${id} not found`);
    return driver;
  },
};

const getDrivers = {
  type: new GraphQLList(DriverType),
  resolve: () => drivers,
};

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    car: getCar,
    cars: getCars,
    driver: getDriver,
    drivers: getDrivers,
  },
});

module.exports = query;
