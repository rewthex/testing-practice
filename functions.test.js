import { capitalize, reverseString, calculator } from './functions';

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
  // test('returns result from adding two numbers', () => {
	// 	expect(calculator.add(5, 5)).toBe(10);
	// 	expect(calculator.add(-5, 5)).toBe(0);
	// 	expect(calculator.add(3, 3)).toBe(6);
	// });
});
