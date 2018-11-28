import {createFragmentFromWrap} from './fragment-creators';

describe('fragment-creators', () => {
	describe('createFragment', () => {
		test('should handle elements that require custom parents', () => {
			let fragment = createFragmentFromWrap('<td>TD</td>');
			expect(fragment.childElementCount).toBe(1);
			expect(fragment.firstElementChild.nodeName.toLowerCase()).toBe('td');

			fragment = createFragmentFromWrap('<tr>TR</tr>');
			expect(fragment.childElementCount).toBe(1);
			expect(fragment.firstElementChild.nodeName.toLowerCase()).toBe('tr');
		});
	});
});
