const axios = require("axios");

const { API_KEY } = process.env;

const getWeather = async (city, startTime) => {
  try {
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

    return weather;
  } catch (err) {
    if (err.response?.status === 400) {
      throw new Error(
        `${(err.response.status)}|${err.response.data.error.message}`
      );
    }
    throw err;
  }
};

module.exports = {
  getWeather,
};
