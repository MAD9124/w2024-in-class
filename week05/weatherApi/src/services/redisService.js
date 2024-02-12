const redis = require("redis");

const { REDIS_URL } = process.env;

let client;

const init = async () => {
  client = await redis
    .createClient({
      url: REDIS_URL,
    })
    .on("error", (err) => {
      console.error(err);
    })
    .on("connect", () => console.log("connected to redis"))
    .connect();
};

// generic functions for accessing redis
const get = (key) => client.get(key);

const set = (key, value) => {
  client.set(key, JSON.stringify(value), {
    EX: 60 * 5, // 5 minutes
  });
};

// specific functions for weather cache
const encodeKey = (city, startTime) => `${city}|${startTime}`;

const getWeather = (city, startTime) => {
  return get(encodeKey(city, startTime));
};

const setWeather = (city, startTime, weather) => {
  set(encodeKey(city, startTime), weather);
};

module.exports = {
  init,

  getWeather,
  setWeather,
};
