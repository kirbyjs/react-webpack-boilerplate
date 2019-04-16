// Created by kirby15 on 2/1/18.

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const webpackConfig = require('./common');

module.exports = {
    ...webpackConfig,
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'initial'
        },
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '..', '..', 'dist'),
        publicPath: '/react-webpack-boilerplate/dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'src', 'index.html')
        })
    ]
};
