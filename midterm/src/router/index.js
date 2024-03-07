import { Router } from 'express';

import { movieDBService } from '../services/index.js';

const router = Router();

router.get('/popularity', async (req, res) => {
	try {
		const { keyword } = req.query;

		if (!keyword) {
			res.status(400).json({
				error: {
					message: 'keyword not specified',
				},
			});
			return;
		}
		const data = await movieDBService.search(keyword, 'popularity');
		res.json({ data });
	} catch (error) {
		res.status(500).json({ error: error.message ?? error });
	}
});
router.get('/release-date', async (req, res) => {
	try {
		const { keyword } = req.query;

		if (!keyword) {
			res.status(400).json({
				error: {
					message: 'keyword not specified',
				},
			});
			return;
		}
		const data = await movieDBService.search(keyword, 'release');
		res.json({ data });
	} catch (error) {
		res.status(500).json({ error: error.message ?? error });
	}
});
router.get('/vote', async (req, res) => {
	try {
		const { keyword } = req.query;

		if (!keyword) {
			res.status(400).json({
				error: {
					message: 'keyword not specified',
				},
			});
			return;
		}
		const data = await movieDBService.search(keyword, 'vote');
		res.json({ data });
	} catch (error) {
		res.status(500).json({ error: error.message ?? error });
	}
});
router.get('/id/:id', async (req, res) => {
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
});
router.get('/meta', (_req, res) => {
	res.json({
		meta: {
			images: {
				baseUrl: 'https://image.tmdb.org/t/p/',
				sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
			},
		},
	});
});

export default router;
