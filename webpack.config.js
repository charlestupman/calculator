const HtmlWebPackPlugin = require('html-webpack-plugin')
const dartSass = require('sass')

module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
					},
				}, {
					loader: 'sass-loader',
					options: {
						implementation: dartSass,
					},
				}],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}
