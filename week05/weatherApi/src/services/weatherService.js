const axios = require("axios");
const cacheService = require("./cacheService");

const getWeather = async (city, startTime) => {
  const cachedWeather = cacheService.get(city, startTime);
  if (cachedWeather) {
    console.log("Weather found in cache");
    return cachedWeather;
  }
  try {
    console.log("Looking up from the Weather API");
    const { data } = await axios.get(
      "https://api.weatherapi.com/v1/history.json",
      {
        params: {
          key: process.env.API_KEY,
          q: city,
          dt: startTime,
        },
      }
    );

    const weather = {
      temperature: data.forecast.forecastday[0].day.avgtemp_c,
      precipitation: data.forecast.forecastday[0].day.totalprecip_mm,
    };

    cacheService.set(city, startTime, weather);

    return weather;
  } catch (err) {
    if (err.response?.status === 400) {
      throw new Error(
        `${err.response.status}|${err.response.data.error.message}`
      );
    }
    throw err;
  }
};

module.exports = {
  getWeather,
};
