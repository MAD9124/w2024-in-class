const cache = new Map();

export const get = id => {
    console.log(cache.keys(), id)
	if (cache.has(id)) return cache.get(id);
};

export const set = data => {
	cache.set(data.id.toString(), data);
};
