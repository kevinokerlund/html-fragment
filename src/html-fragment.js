import {HAS_TEMPLATE_SUPPORT} from './constants';
import {createFragmentFromTemplate, createFragmentFromWrap} from './fragment-creators';


/**
 * Create a DocumentFragment from a string of HTML
 *
 * @param html {String}
 * @returns {DocumentFragment}
 */
export default function HtmlFragment(html = '') {
	if (HAS_TEMPLATE_SUPPORT) {
		return createFragmentFromTemplate(html);
	}

	return createFragmentFromWrap(html);
}
