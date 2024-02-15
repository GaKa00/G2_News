const path = require('path');

module.exports = {
    entry: './public/main.js', // Entry point of your application
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output bundle file
    },
};
