/**
 * Finds the first HTML tag at the beginning of a string
 *
 * @type {RegExp}
 */
const regex = /^[\s]*<([a-z][^\/\s>]+)/i;


/**
 * Return the first HTML tag found in a string of HTML (if the string starts with a tag)
 * If no tag is found, return null
 *
 * @param html {String}
 * @returns {String | null}
 */
export default function(html) {
	const match = html.match(regex);

	if (match) {
		return match[1];
	}

	return null;
}
