const redis = require("redis");

let client;

const init = async () => {
  client = await redis
    .createClient({
      url: process.env.REDIS_URL,
    })
    .on("error", (err) => {
      console.error(err);
    })
    .connect();
};

const get = async (id) => {
  const str = await client.get(id);
  if (str) return JSON.parse(str);
};

const set = (id, data) => {
  client.set(id, JSON.stringify(data), {
    EX: 60 * 5, // 5 mins
  });
};

const addMovieToCache = (movie) => {
  set(movie.id.toString(), movie);
};

module.exports = {
  init,
  get,
  addMovieToCache,
};
