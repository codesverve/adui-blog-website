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
	css: {
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
