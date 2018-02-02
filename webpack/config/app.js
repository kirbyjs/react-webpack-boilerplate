// Created by kirby15 on 2/1/18.

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./common');
const path = require('path');

module.exports = {
    ...webpackConfig,
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '..', '..', 'dist'),
        publicPath: '/react-webpack-boilerplate/dist/'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new UglifyJSPlugin({
            parallel: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'src', 'index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
