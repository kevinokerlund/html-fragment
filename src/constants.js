/**
 * Whether the browser supports the template tag
 * The template tag is the most efficient and safe way to create a template
 *
 * @type {boolean}
 */
export const HAS_TEMPLATE_SUPPORT = 'content' in document.createElement('template');


/**
 * Whether the browser supports the Range Api
 *
 * @type {boolean}
 */
export const HAS_RANGE_SUPPORT = document.createRange && 'createContextualFragment' in document.createRange();


/**
 * This map is only used if the browser does not support the template tag and the HTML
 * to create a fragment from needs a special wrapper.
 *
 * For example, a <td> cannot be placed directly inside of a div, it must, at a minimum
 * be wrapped inside of "<table><tr>(THE TD)</tr></table>"
 *
 * @type {object}
 */
export const WRAP_MAP = {
	div: ['div', '<div>', '</div>'],
	thead: ['table', '<table>', '</table>'],
	col: ['colgroup', '<table><colgroup>', '</colgroup></table>'],
	tr: ['tbody', '<table><tbody>', '</tbody></table>'],
	td: ['tr', '<table><tr>', '</tr></table>'],
};
WRAP_MAP.caption = WRAP_MAP.colgroup = WRAP_MAP.tbody = WRAP_MAP.tfoot = WRAP_MAP.thead;
WRAP_MAP.th = WRAP_MAP.td;
