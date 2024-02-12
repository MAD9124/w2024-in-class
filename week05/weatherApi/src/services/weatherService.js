const axios = require("axios");
const cacheService = require("./cacheService");

const { API_KEY } = process.env;

const getWeather = async (city, startTime) => {
  const cachedWeather = cacheService.get(city, startTime);
  if (cachedWeather) {
    console.log("Cache found, no need to use the weather API");
    return cachedWeather;
  }

  try {
    console.log("Looking up in the weather API");
    const { data } = await axios.get(
      "https://api.weatherapi.com/v1/history.json",
      {
        params: {
          key: API_KEY,
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
