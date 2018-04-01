// Created by kirby15 on 2/1/18.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const scssCommonLoaders = [
    {
        loader: 'css-loader',
        options: {
            minimize: isProduction,
            sourceMap: !isProduction
        }
    },
    {
        loader: 'sass-loader',
        options: { sourceMap: !isProduction }
    }
];

if (isProduction) {
    scssCommonLoaders.splice(0, 0, MiniCssExtractPlugin.loader);
    scssCommonLoaders.splice(2, 0, 'postcss-loader');
} else {
    scssCommonLoaders.splice(0, 0, 'style-loader');
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss/,
                use: scssCommonLoaders
            }
        ]
    }
};
