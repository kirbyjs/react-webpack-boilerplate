// Created by kirby15 on 2/1/18.

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('./common');
const merge = require('webpack-merge');
const path = require('path');

const loaderConfig = [{
    test: /\.scss/,
    use: [MiniCssExtractPlugin.loader]
}];

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    module: merge.smart({ rules: loaderConfig }, webpackConfig.module),
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
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css' // change to [contenthash] when available
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'src', 'index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
