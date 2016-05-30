var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var webpack = require("webpack");

module.exports = {
    entry: './app/Main',
    output: {
        path: path.join(__dirname, 'build', 'out', 'assets'),
        filename: 'bundle.js',
        publicPath: "/assets/"
    },
    plugins: [
        new AureliaWebpackPlugin({
            src: path.resolve('./app/')
        }),
        new webpack.ProvidePlugin({
            Promise: "bluebird",
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
        //new ExtractTextPlugin("style.less")
        //new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.ts', '.js', '.scss', '.css', '.html'],
        alias: {
            "highlight/less": path.resolve("./scripts/highlight-languages/less"),
            "highlight.js": path.resolve("./scripts/highlight"),
            "highlight/js": path.resolve("./scripts/highlight-languages/javascript"),
            "highlight/css": path.resolve("./scripts/highlight-languages/css"),
            "highlight/scss": path.resolve("./scripts/highlight-languages/scss"),
            "highlight/ts": path.resolve("./scripts/highlight-languages/typescript"),
            "modernizr": path.resolve("./scripts/modernizr"),
            "fetch": path.resolve("./scripts/fetch"),
            "moment": path.resolve("./scripts/moment"),
            "markdown-it": path.resolve("./scripts/markdown-it"),
            "jquery": path.resolve("./scripts/jquery"),
            "googleAnalytics": path.resolve("./scripts/googleAnalytics"),
            "bluebird": path.resolve("./scripts/bluebird"),
            "scripts": path.resolve("./scripts/scripts.min")
        }
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "css-loader" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.html$/, loader: 'html' },
            { test: /\.ts$/, loader: 'ts-loader', exclude: [/node_modules/, /\.d.ts$/] },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
        ]
    },
    devtool: "cheap-module-source-map"
};