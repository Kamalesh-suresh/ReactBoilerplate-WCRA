/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');

const commonConfig = require('./webpack.common');

const prodConfig = {
	mode: 'production',
	plugins: [
		new EnvironmentPlugin({
			API: 'https://prod.bradgarropy.com',
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
