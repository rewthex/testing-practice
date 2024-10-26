import { capitalize } from './functions';

describe('capitalize', () => {
	test('successfully capitalizes "hello" to "Hello"', () => {
		expect(capitalize('hello')).toBe(3);
	});
});
