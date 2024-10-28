export const capitalize = (string) => {
	if (typeof string !== 'string')
		throw new TypeError('Input must be a string!');
	return string[0].toUpperCase() + string.slice(1);
};

export const reverseString = (string) => {
	if (typeof string !== 'string')
		throw new TypeError('Input must be a string!');
	return string.split('').reverse().join('');
};

export const calculator = {
	add(x, y) {
		return x + y;
	},
	subtract(x, y) {
		return x - y;
	},
	divide(x, y) {
		return x / y;
	},
};
