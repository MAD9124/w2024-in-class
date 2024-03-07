import axios from "axios";
import { redisService } from "./index.js";
import { addMovieToCache } from "./redisService.js";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common.Authorization = `Bearer ${process.env.API_KEY}`;

const toSearchResponse = ({ id, title, poster_path }) => ({
  id,
  title,
  poster_path,
});

const sorts = {
  popularity: (a, b) => b.popularity - a.popularity,
  vote: (a, b) => b.vote_average - a.vote_average,
  release: (a, b) => new Date(b.release_date) - new Date(a.release_date),
};

export const search = async (query, sort) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
  });
  const { results } = data;

  return results.sort(sorts[sort]).map((movie) => toSearchResponse(movie));
};

export const getById = async (id) => {
  const cachedResult = await redisService.get(id.toString());
  if (cachedResult) return cachedResult;

  const { data } = await axios.get(`/movie//${id}`);

  redisService.addMovieToCache(data);

  return data;
};
