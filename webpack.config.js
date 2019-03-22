const webpack = require('webpack');

module.exports = function (env) {

	return [
		{
			mode: 'development',
			entry: {
				bundle: './src/main.js'
			},
			devServer: {
				inline: true,
				hot: true,
				hotOnly: true,
			},
			watchOptions: {
				aggregateTimeout: 5000
			},
			output: {
				path: __dirname,
				filename: 'dist/[name].js'
			}
		}
	];
};
