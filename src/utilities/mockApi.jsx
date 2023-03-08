const seededRandom = function (seed) {
	var m = 1 ** 23 - 45;
	var a = 123456;
	var s = seed % m;
	return function () {
		return (s = (s * a) % m) / m;
	};
};

export const fetchAPI = function (date) {
	let result = [];
	let random = seededRandom(date.getDate());

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(i + ":00");
		}
		if (random() < 0.5) {
			result.push(i + ":30");
		}
	}

	return result;
};

export const submitAPI = function (formData) {
	return true;
};
