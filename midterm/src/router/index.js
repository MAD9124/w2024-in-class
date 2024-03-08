const { Router } = require('express');
const mainController = require("../controllers/main.js");

const router = Router();

// get many by keyword + sort
router.get("/popularity", mainController.findByPopularity);
router.get("/release-date", mainController.findByReleaseDate);
router.get("/vote", mainController.findByVote);

// getOne (where the caching happens)
router.get("/id/:id", mainController.getById);

router.get("/meta", mainController.getMetadata);

module.exports = router;
