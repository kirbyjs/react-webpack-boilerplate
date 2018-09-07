// Created by kirby15 on 2/1/18.

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./common');
const path = require('path');

module.exports = {
    ...webpackConfig,
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'initial'
        }
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '..', '..', 'dist'),
        publicPath: '/react-webpack-boilerplate/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'src', 'index.html')
        })
    ]
};
