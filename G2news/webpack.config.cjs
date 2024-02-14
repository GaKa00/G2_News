const path = require('path');

module.exports = {
    entry: './public/src/main.js', // Entry point of your application
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output bundle file
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
