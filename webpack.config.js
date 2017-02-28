var webpack = require('webpack');

module.exports = {
	entry: './src/html-fragment.js',
	devtool: 'source-map',
	output: {
		path: './lib',
		filename: 'html-fragment.min.js',
		library: 'HtmlFragment',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				test: /\.js$/,
				exclude: /node_modules/,
				query: {
					presets: ['es2015'],
					plugins: ['babel-plugin-add-module-exports']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	]
};
