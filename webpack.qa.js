/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');

const commonConfig = require('./webpack.common');

const qaconfig = {
	mode: 'production',
	plugins: [
		new EnvironmentPlugin({
			API: 'https://qa.bradgarropy.com',
		}),
	],
};

module.exports = merge(commonConfig, qaconfig);
