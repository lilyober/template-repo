const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { // new line
        static: { // new line
          directory: path.join(__dirname, "dist"), // new line
        }, // new line
      }, // new line 
    plugins: [
        new ESLintPlugin(), // new line!
        new CleanWebpackPlugin(), // new line
        new HtmlWebpackPlugin({
            title: 'Shape Tracker',
            template: './src/index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};