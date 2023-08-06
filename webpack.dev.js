/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');

const commonConfig = require('./webpack.common');

const devConfig = {
	mode: 'development',
	plugins: [
		new EnvironmentPlugin({
			API: 'https://dev.bradgarropy.com',
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
