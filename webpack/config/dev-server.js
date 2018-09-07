// Created by kirby15 on 2/1/18.

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetsHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpackConfig = require('./common');
const path = require('path');

module.exports = {
    ...webpackConfig,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        port: 9020
    },
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', '..', 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '..', 'manifest', 'vendor.json')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'src', 'index.html')
        }),
        new AddAssetsHtmlPlugin({
            filepath: path.resolve(__dirname, '..', 'vendor-scripts', 'vendor.*.js')
        })
    ]
};
