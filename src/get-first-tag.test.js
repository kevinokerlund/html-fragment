import getFirstTag from '../src/get-first-tag';

describe('get-first-tag', () => {
	test('should find the HTML tag when the string starts with am HTML tag', () => {
		const tag = getFirstTag('<td>TD</td>');
		expect(tag).toBe('td');
	});

	test('should return null if there is no tag at the start of the HTML string', () => {
		const tag = getFirstTag('');
		expect(tag).toBe(null);
	});

	test('should return null if a non-tag is at the beginning of the string', () => {
		const tag = getFirstTag('Content <div>Other Content</div>');
		expect(tag).toBe(null);
	});

	test('should return the first tag if the content before the first tag is whitespace', () => {
		const tag = getFirstTag('    <div>Other Content</div>');
		expect(tag).toBe('div');
	});
});
