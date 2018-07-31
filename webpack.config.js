var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    entry: './src/',

    output: {
        path: path.resolve('./static/'),
        filename: "[name]-[hash].js",
    },

    plugins: [
        new BundleTracker({ filename: './src/webpack-stats.json' }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
            test: /\.css$/,
            loader: "style-loader!css-loader"
            }, 
            {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
            }
        ]
    },
resolve: {
    extensions: ['*', '.js', '.jsx']
}

};