const axios = require("axios");
const redisService = require("./redisService");

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const toDTO = ({ id, title, poster_path }) => ({
  id,
  title,
  poster_path,
});

const sorts = {
  popularity: (a, b) => b.popularity - a.popularity,
  vote: (a, b) => b.vote_average - a.vote_average,
  release: (a, b) => new Date(b.release_date) - new Date(a.release_date),
};

const search = async (query, sort) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
      include_adult: "false",
      language: "en-US",
      page: "1",
      api_key: process.env.API_KEY,
    },
  });
  const { results } = data;

  return results.sort(sorts[sort]).map(toDTO);
};

const getById = async (id) => {
  const cachedResult = await redisService.get(id);
  if (cachedResult) return cachedResult;

  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: process.env.API_KEY,
    },
  });

  redisService.addMovieToCache(data);

  return data;
};

module.exports = {
  search,
  getById,
};
