import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import router from './router/index.js';

const main = async () => {
	const app = express();

	app.use(cors());

	app.get('/', (_req, res) => {
		res.send('API running');
	});
	app.use('/api', router);

	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}`);
	});
};

main();
