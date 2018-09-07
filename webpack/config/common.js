// Created by kirby15 on 2/1/18.

const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';
const scssCommonLoaders = [
    'style-loader',
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
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: [autoprefixer({ browsers: 'last 2 versions' })]
        }
    }
];

module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
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
