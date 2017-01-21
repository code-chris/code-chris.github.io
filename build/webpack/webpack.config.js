
//
//   WEBPACK CONFIGURATION FILE
//
//   Table of Contents:
//     0. DEFINITIONS                   Node.js Require-Statements
//     1. PLUGIN CONFIGURATIONS         Array of Webpack plugins
//        1.0 CopyWebpackPlugin
//        1.1 AureliaWebpackPlugin
//        1.2 CommonsChunkPlugin
//        1.3 ExtractTextPlugin
//        1.4 HtmlWebpackPlugin
//        1.5 ProvidePlugin
//        1.6 UglifyJsPlugin            production only
//        1.7 CompressionPlugin         production only
//        1.8 SourceMapDevToolPlugin    development only
//        1.9 Visualizer
//        1.10
//     2. LOADER CONFIGURATIONS         Array of Webpack loaders
//     3. MAIN CONFIGURATION            Final configuration object
//



// #####################################
//         0. DEFINITIONS
// #####################################

// 0.0 Normal dependencies
var path = require("path");

// 0.1 Webpack & Webpack plugins
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Visualizer = require("webpack-visualizer-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

// 0.2 maps and params
var params = require("../scripts/params");
var libraryMapping = require("./lib-map");
var isProduction = params.prod;


// #####################################
//         1. PLUGIN CONFIGURATIONS
// #####################################
var plugins = [];

// 1.0
// The CopyWebpackPlugin copies all files matching "from" to the new location "to".
// [path] means the directory path relative to from: "content/fonts/myfont/google.woff" will be "/myfont"
// [name] means the filename without the file extension
// [ext] means the file extension itself
plugins.push(new CopyWebpackPlugin([
    { from: 'content/fonts', to: '../content/fonts[path]/[name].[ext]' },
    { from: 'content/images', to: '../content/images[path]/[name].[ext]' },
    { from: 'content/common/robots.txt', to: '..' },
    { from: "posts", to: '../posts' }
]));

// 1.1
// The AureliaWebpackPlugin handles all Aurelia related dependencies in the application
// e.g. <require from=""></require> tags in HTML
// This plugin will deprecate soon if "https://github.com/aurelia/skeleton-navigation/pull/714" is tested and stable
plugins.push(new AureliaWebpackPlugin({
    root: path.resolve('.'),
    src: path.resolve('./app/')
}));

// 1.2
// The CommonsChunkPlugin merges all library sources used in whole application into one bundle called vendor.
// So no library sources should be contained in other bundles. All libraries which should be included here
// have to be listed in lib-map.js next to this configuration file.
plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
}));

// 1.3
// The ExtractTextPlugin extracts all CSS sources from all bundles to an own css file called "style.css".
plugins.push(new ExtractTextPlugin({filename: `style.css${params.bust}`, allChunks: true}));

// 1.4
// The HtmlWebpackPlugin generates the index.html file from the given template. This is necessary, because the referenced
// javascript bundles change their names dynamically in production build. (See cache-busting)
plugins.push(new HtmlWebpackPlugin({
    template: './index.ejs',
    filename: "../index.html",
    inject: true
}));

// 1.5
// The ProvidePlugin exposes all given libraries (right-hand side) to the global window variable in browser (left-hand side)
// So the Bluebird library is exposed to global "Promise" variable.
plugins.push(new webpack.ProvidePlugin({
    Promise: "bluebird",
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
}));

if (isProduction) {
    // 1.6
    // The UglifyJsPlugin minifys all application sources
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true }));

    // 1.7
    // The CompressionPlugin compresses all javascript bundles with the gzip algorithm. The original files will be
    // overwritten. Note not to compress css files, because this broke the app for some reasons.
    /*plugins.push(new CompressionPlugin({
        asset: "[path]?[query]",
        algorithm: "gzip",
        test: /\.js\?bust=/,
        threshold: 0,
        minRatio: 0
    }));*/
} else {
    // 1.8
    // The SourceMapDevToolPlugin generates SourceMaps for all assets in development mode.
    plugins.push(new webpack.SourceMapDevToolPlugin({
        filename: "[name].map"
    }));
}

// 1.9
// The Visualizer plugin creates a html file with a visual diagram where all modules included in the bundles
// are listed with their names and resulting file size.
plugins.push(new Visualizer({
    filename: "../../artifacts/stats.html"
}));

// 1.10
var p = {};
p.apply = (compiler) => {
    compiler.plugin('done', (callback) => {
        setTimeout(() => console.log("\n\nBuild time: " + new Date().toLocaleString()), 1000);
    });
};

plugins.push(p);



// #####################################
//         2. LOADER CONFIGURATIONS
// #####################################
var cacheBustLoader = `cache-bust-loader?name=bust&value=${params.bustValue}&types=eot;woff;woff2;svg;ttf;otf;jpg;jpeg;png;ico;gif`;

var loaders = [
    { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: `${cacheBustLoader}!raw-loader` }) },
    { test: /\.scss/, loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: `${cacheBustLoader}!raw-loader!sass-loader` }) },
    { test: /\.html$/, loader: `${cacheBustLoader}!raw-loader` },
    { test: /\.ts$/, loader: `${cacheBustLoader}!awesome-typescript-loader`, exclude: [path.resolve("node_modules"), path.resolve("typings")] },
    { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff2' },
    { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
];



// #####################################
//         3. MAIN CONFIGURATION
// #####################################
module.exports = {
    entry: {
        main: "./app/Main",
        vendor: Object.keys(libraryMapping),
    },
    output: {
        path: path.resolve('./build/out/assets'),
        filename: `[name].js${params.bust}`,
        sourceMapFilename: `[name].map${params.bust}`,
        publicPath: "assets/"
    },
    plugins: plugins,
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.css', '.html'],
        alias: libraryMapping
    },
    module: {
        noParse: /aurelia-loader-default/,
        rules: loaders
    },
    devtool: isProduction ? "#source-map" : undefined,
    watch: !isProduction
};
