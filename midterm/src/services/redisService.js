import redis from 'redis';

const client = await redis
	.createClient({
		url: process.env.REDIS_URL,
	})
	.on('error', err => {
		console.error(err);
	})
	.connect();

export const get = async id => {
	const str = await client.get(id);
	if (str) return JSON.parse(str);
};

export const set = (id, data) => {
	client.set(id, JSON.stringify(data), {
		EX: 60 * 5, // 5 mins
	});
};

export const addMovieToCache = movie => {
	set(movie.id.toString(), movie);
};
