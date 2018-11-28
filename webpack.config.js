const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/html-fragment.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'html-fragment.min.js',
		library: 'HtmlFragment',
		libraryTarget: 'umd',
		libraryExport: 'default',
	}
};
