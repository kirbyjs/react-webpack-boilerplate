// Created by kirby15 on 2/1/18.

module.exports = {
    ignore: ['node_modules'],
    presets: [
        '@babel/preset-stage-3',
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: {browsers: ['last 2 versions']},
                modules: false
            }
        ]
    ],
    plugins: [
        'react-hot-loader/babel'
    ]
};
