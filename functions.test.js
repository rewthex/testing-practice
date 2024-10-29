import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from './functions';

describe('capitalize', () => {
	test('returns string capitalized', () => {
		expect(capitalize('hello')).toBe('Hello');
		expect(capitalize('tiger')).toBe('Tiger');
		expect(capitalize('door')).toBe('Door');
	});
	test('returns sentences capitalized', () => {
		expect(capitalize('i like cats.')).toBe('I like cats.');
		expect(capitalize('refactor your code.')).toBe('Refactor your code.');
		expect(capitalize('commit early and often.')).toBe(
			'Commit early and often.'
		);
	});
	test('throws an error for an invalid input', () => {
		expect(() => capitalize(null)).toThrow();
		expect(() => capitalize(0)).toThrow();
		expect(() => capitalize()).toThrow();
	});
});

describe('reverseString', () => {
	test('returns the string reversed', () => {
		expect(reverseString('hello')).toBe('olleh');
		expect(reverseString('aaron')).toBe('noraa');
		expect(reverseString('zebra')).toBe('arbez');
	});
	test('returns sentences reversed', () => {
		expect(reverseString('The sky is blue.')).toBe('.eulb si yks ehT');
		expect(reverseString('Chase the car.')).toBe('.rac eht esahC');
		expect(reverseString('Commit early and often.')).toBe(
			'.netfo dna ylrae timmoC'
		);
	});
	test('throws an error for an invalid input', () => {
		expect(() => reverseString(null)).toThrow();
		expect(() => reverseString(0)).toThrow();
		expect(() => reverseString()).toThrow();
	});
});

describe('calculator', () => {
	test('returns result from adding two numbers', () => {
		expect(calculator.add(5, 5)).toBe(10);
		expect(calculator.add(-5, 5)).toBe(0);
		expect(calculator.add(3, 3)).toBe(6);
	});
	test('returns result from subtracting two numbers', () => {
		expect(calculator.subtract(5, 5)).toBe(0);
		expect(calculator.subtract(12, 5)).toBe(7);
		expect(calculator.subtract(3, 4)).toBe(-1);
	});
	test('returns result from dividing two numbers', () => {
		expect(calculator.divide(10, 5)).toBe(2);
		expect(calculator.divide(5, 10)).toBe(0.5);
		expect(calculator.divide(3, 3)).toBe(1);
	});
	test('returns result from multiplying two numbers', () => {
		expect(calculator.multiply(5, 5)).toBe(25);
		expect(calculator.multiply(-5, 5)).toBe(-25);
		expect(calculator.multiply(3, 3)).toBe(9);
	});
	test('throws error for invalid inputs', () => {
		expect(() => calculator.add('potato', undefined)).toThrow();
		expect(() => calculator.subtract('null', null)).toThrow();
		expect(() => calculator.divide('ojnasdf', '@3049;;')).toThrow();
		expect(() => calculator.add('potato', undefined)).toThrow();
	});
});

describe('caesarCipher', () => {
	test('rotate letters in a string', () => {
		expect(caesarCipher('xyz', 3)).toBe('abc');
		expect(caesarCipher('abc', 3)).toBe('def');
		expect(caesarCipher('fgh', 3)).toBe('ijk');
	});
	test('rotate sentences and phrases', () => {
		expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
		expect(caesarCipher(`Don't stop programming!`, 7)).toBe(
			`Kvu'a zavw wyvnyhttpun!`
		);
	});
	test('throws error for invalid inputs', () => {
		expect(() => caesarCipher('potato', undefined)).toThrow();
		expect(() => caesarCipher('null', null)).toThrow();
		expect(() => caesarCipher('ojnasdf', '@3049;;')).toThrow();
		expect(() => caesarCipher('potato', undefined)).toThrow();
	});
});

describe('analyzeArray', () => {
	test('returns an object', () => {
		expect(analyzeArray([1, 2, 3])).toBeInstanceOf(Object);
	});
	test('returns average', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
	});
	test('returns min', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
	});
	test('returns max', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
	});
	test('returns length', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
	});
	test('throws error for invalid inputs', () => {
		expect(() => analyzeArray([])).toThrow();
		expect(() => analyzeArray(null)).toThrow();
		expect(() => analyzeArray([1,2,'yam'])).toThrow();
		expect(() => analyzeArray([null, undefined, 'taco'])).toThrow();
	});
	
});
