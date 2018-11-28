import getFirstTag from './get-first-tag';
import {HAS_RANGE_SUPPORT, WRAP_MAP} from './constants';


/**
 * Create a DocumentFragment using Range Api
 *
 * @NOTE While the range API does support creating fragments, it does not handle creating
 * fragments that require specific parents (td).
 *
 * @param html {String}
 * @returns {DocumentFragment}
 */
function createFragmentFromRange(html) {
	return document.createRange().createContextualFragment(html);
}


/**
 * Create a DocumentFragment using <template>
 *
 * @param html {String}
 * @returns {DocumentFragment}
 */
export function createFragmentFromTemplate(html) {
	const template = document.createElement('template');
	template.innerHTML = html;
	return template.content;
}


/**
 * If the HTML does not have a tag at the beginning that needs a specific parent,
 * return a fragment using the Range API.
 *
 * If the HTML has a tag at the beginning that needs to be wrapped, wrap the HTML,
 * and then insert the childNodes into a DocumentFragment.
 *
 * @param html {String}
 * @returns {DocumentFragment}
 */
export function createFragmentFromWrap(html) {
	const fragment = document.createDocumentFragment();
	const queryContainer = document.createElement('div');
	const firstTag = getFirstTag(html);
	const wrap = WRAP_MAP[firstTag || 'div'];

	if (wrap[0] === 'div' && HAS_RANGE_SUPPORT) {
		return createFragmentFromRange(html);
	}

	queryContainer.insertAdjacentHTML('beforeend', `${wrap[1]}${html}${wrap[2]}`);

	const query = queryContainer.querySelector(wrap[0]);

	while (query.firstChild) {
		fragment.appendChild(query.firstChild);
	}

	return fragment;
}
