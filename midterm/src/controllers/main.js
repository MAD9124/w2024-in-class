const movieDBService = require("../services/movieDBService.js");

const findByPopularity = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      res.status(400).json({
        error: {
          message: "keyword not specified",
        },
      });
      return;
    }
    const data = await movieDBService.search(keyword, "popularity");
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message ?? error });
  }
};

const findByReleaseDate = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      res.status(400).json({
        error: {
          message: "keyword not specified",
        },
      });
      return;
    }
    const data = await movieDBService.search(keyword, "release");
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message ?? error });
  }
};

const findByVote = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      res.status(400).json({
        error: {
          message: "keyword not specified",
        },
      });
      return;
    }
    const data = await movieDBService.search(keyword, "vote");
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message ?? error });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await movieDBService.getById(id);
    res.json({ data });
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        error: {
          message: error.response.data.status_message,
        },
      });
      return;
    }
    res.status(500).json({ error: error.message ?? error });
  }
};

const getMetadata = (_req, res) => {
  res.json({
    meta: {
      images: {
        baseUrl: "https://image.tmdb.org/t/p/",
        sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
      },
    },
  });
};

module.exports = {
  findByPopularity,
  findByReleaseDate,
  findByVote,
  getById,
  getMetadata,
};
