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
		if (typeof x !== 'number' || typeof y !== 'number')
			throw new TypeError('Inputs must be numbers!');
		return x + y;
	},
	subtract(x, y) {
		if (typeof x !== 'number' || typeof y !== 'number')
			throw new TypeError('Inputs must be numbers!');
		return x - y;
	},
	divide(x, y) {
		if (typeof x !== 'number' || typeof y !== 'number')
			throw new TypeError('Inputs must be numbers!');
		return x / y;
	},
	multiply(x, y) {
		if (typeof x !== 'number' || typeof y !== 'number')
			throw new TypeError('Inputs must be numbers!');
		return x * y;
	},
};

export const caesarCipher = (string, times) => {
	const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
	const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let newString = '';
	for (const char of string) {
		let indexLower = alphabetLower.indexOf(char);
		let indexUpper = alphabetUpper.indexOf(char);
		if (indexLower !== -1) {
			let newIndex = (indexLower + times) % 26;
			newString += alphabetLower[newIndex];
		} else if (indexUpper !== -1) {
			let newIndex = (indexUpper + times) % 26;
			newString += alphabetUpper[newIndex];
		} else {
			newString += char;
		}
	}
	return newString;
};

console.log(caesarCipher('Hello, World!', 3));
