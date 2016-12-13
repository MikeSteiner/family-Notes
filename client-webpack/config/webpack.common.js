const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': './polyfills.ts',
		'vendor': './vendor.ts',
		'app': './main.ts'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	module: {
		loaders: [{
			test: /\.ts$/,
			loaders: [
				'awesome-typescript-loader',
				'angular2-template-loader'
			]
		}, {
			test: /\.html$/,
			loader: 'html-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
			loader: 'file-loader?name=assets/[name].[hash].[ext]'
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: './index.html'
		}),

		new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
        helpers.root(''), // location of your src
        {
          // your Angular Async Route paths relative to this root directory
        }
      )
	]
};