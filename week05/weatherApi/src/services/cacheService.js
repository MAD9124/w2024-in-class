const CACHE = {};

const encodeKey = (city, startTime) => `${city}|${startTime}`;

const get = (city, startTime) => CACHE[encodeKey(city, startTime)];

const set = (city, startTime, weather) => {
  CACHE[encodeKey(city, startTime)] = weather;
};

module.exports = {
  get,
  set,
};
