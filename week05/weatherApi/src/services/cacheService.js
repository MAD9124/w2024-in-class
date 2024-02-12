const CACHE = {};

const encodeKey = (city, startTime) => `${city}|${startTime}`;

const get = (city, startTime) => CACHE[encodeKey(city, startTime)];

const set = (city, startTime, value) => {
  CACHE[encodeKey(city, startTime)] = value;
};

module.exports = {
  get,
  set,
};
