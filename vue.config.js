'use strict';
const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = defaultSettings.title;

module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	devServer: {
		port: 9999,
		open: true,
		overlay: {
			warnings: false,
			errors: true
		}
	},
	configureWebpack: {
		name: name,
		resolve: {
			alias: {
				'@': resolve('src')
			}
		}
	},
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('vue-loader')
			.loader('vue-loader-v16') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					'primary-color': '#2f2f2f'
				},
				javascriptEnabled: true
			}
		}
	}
};
