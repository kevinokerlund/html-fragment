/**
 * This map is only used if the browser does not support the template tag and the HTML
 * to create a fragment from needs a special wrapper.
 *
 * For example, a <td> cannot be placed directly inside of a div, it must, at a
 * minimum be wrapped inside of "<table><tr>(THE TD)</tr></table>"
 *
 * @type object
 */
const WRAP_MAP = {
	thead: ['table', '<table>', '</table>'],
	col: ['colgroup', '<table><colgroup>', '</colgroup></table>'],
	tr: ['tbody', '<table><tbody>', '</tbody></table>'],
	td: ['tr', '<table><tr>', '</tr></table>']
};
WRAP_MAP.caption = WRAP_MAP.colgroup = WRAP_MAP.tbody = WRAP_MAP.tfoot = WRAP_MAP.thead;
WRAP_MAP.th = WRAP_MAP.td;


/**
 * Regular Expression for finding the first HTML tag in a given string of HTML.
 * If it does not find it as the first thing in the string, it ends
 *
 * Example:
 * string: <td class="foo">Data</td>
 * matched: "td"
 *
 * @type {RegExp}
 */
const FIRST_TAG_REGEX = /^[\s]*<([a-z][^\/\s>]+)/i;


/**
 * If the current browser supports template elements, it returns a fragment from
 * a temporary template element.
 *
 * If the HTML does not have a tag at the beginning that needs to be wrapped,
 * and template is not supported, then return a fragment using the Range API.
 *
 * If the HTML has a tag at the beginning that needs to be wrapped, and the browser
 * does not support template, then wrap the HTML, and then insert the childNodes
 * into a DocumentFragment.
 *
 * @param html
 * @returns DocumentFragment
 */
export default function (html) {
	let fragment, queryContainer, query, wrap, tag, template;

	// If the browser supports template tag
	if ('content' in document.createElement('template')) {
		template = document.createElement('template');
		template.innerHTML = html;
		return template.content;
	}

	// If template tag is not supported and no special wrap is needed, use Range API
	tag = (FIRST_TAG_REGEX.exec(html) || ['', ''])[1];
	wrap = WRAP_MAP[tag];

	if (!wrap) {
		return document.createRange().createContextualFragment(html);
	}


	// If template tag is not supported and a special wrap is needed, wrap and return fragment
	fragment = document.createDocumentFragment();

	html = [wrap[1], html, wrap[2]].join('');

	queryContainer = document.createElement('div');
	queryContainer.insertAdjacentHTML('beforeend', html);
	query = queryContainer.querySelector(wrap[0]);

	while (query.firstChild) {
		fragment.appendChild(query.firstChild);
	}

	return fragment;
}
