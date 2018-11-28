import HTMLFragment from '../src/html-fragment';
import * as constants from '../src/constants';

describe('html-fragment', () => {

	test('should return an empty fragment when no argument is passed', () => {
		const fragment = HTMLFragment();
		expect(fragment.nodeType).toBe(11);
		expect(fragment.hasChildNodes()).toBe(false);
	});

	describe('with template tag support', () => {

		test('should return a DocumentFragment', () => {
			const fragment = HTMLFragment('');
			expect(fragment.nodeType).toBe(11);
		});

		test('should return a fragment with td as the parent', () => {
			const fragment = HTMLFragment('<td>TD</td>');
			expect(fragment.childElementCount).toBe(1);
			expect(fragment.firstElementChild.nodeName.toLowerCase()).toBe('td');
		});

	});

	describe('without template tag support', () => {
		const originalTemplateSupport = constants.HAS_TEMPLATE_SUPPORT;

		beforeAll(() => {
			constants.HAS_TEMPLATE_SUPPORT = false;
		});

		afterAll(() => {
			constants.HAS_TEMPLATE_SUPPORT = originalTemplateSupport;
		});

		test('should return a fragment fragment', () => {
			const fragment = HTMLFragment('');
			expect(fragment.nodeType).toBe(11);
		});

	});

});
