"use strict";

const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const cars = require("./data/cars");

const CarType = new GraphQLObjectType({
  name: "CarType",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    make: { type: new GraphQLNonNull(GraphQLString) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    colour: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const DriverType = new GraphQLObjectType({
  name: "DriverType",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    wins: { type: new GraphQLNonNull(GraphQLInt) },
    cars: {
      type: new GraphQLList(CarType),
      resolve: async (driver) => {
        console.log("Waiting for expensive query.");
        await new Promise((res) => setTimeout(res, 3000));
        return cars.filter((car) => driver.cars.includes(car.id));
      },
    },
  },
});

module.exports = { CarType, DriverType };
