const redis = require("redis");

let client;

const init = async () => {
  client = await redis
    .createClient({
      url: process.env.REDIS_URL,
    })
    .on("error", (err) => console.error(err))
    .on("connect", () => console.log("Connected to redis"))
    .connect();
};

const get = async (key) => {
  const value = await client.get(key);
  return JSON.parse(value);
};

const set = (key, value) => {
  client.set(key, JSON.stringify(value), {
    EX: 60 * 5, // 5 minutes
  });
};

const encodeKey = (city, startTime) => `${city}|${startTime}`;

const getWeather = async (city, startTime) => {
  const weather = await get(encodeKey(city, startTime));
  return weather;
};

const setWeather = (city, startTime, weather) => {
  set(encodeKey(city, startTime), weather);
};

module.exports = {
  init,
  getWeather,
  setWeather,
};
