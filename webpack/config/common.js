// Created by kirby15 on 2/1/18.

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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
