
// #####################################
//         DEFINITIONS
// #####################################

const path = require("path");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require("webpack-visualizer-plugin");
const Uglify = require('uglifyjs-webpack-plugin');

const params = require("../scripts/params");
const isProduction = params.prod;


// #####################################
//         PLUGIN CONFIGURATIONS
// #####################################
const plugins = [];

plugins.push(new CopyWebpackPlugin({ patterns: [
    { from: 'content/fonts', to: '../content/fonts[path]/[name].[ext]' },
    { from: 'content/images', to: '../content/images[path]/[name].[ext]' },
    { from: 'content/common/robots.txt', to: '..' }
]}));

plugins.push(new webpack.DefinePlugin({
    FEATURE_NO_SVG: true,
    FEATURE_NO_UNPARSER: true
}));

plugins.push(new AureliaPlugin({
    includeAll: "app",
    viewsFor: "app/**/*.{ts,js}",
    features: {
        svg: false,
        unparser: false
    }
}));

plugins.push(new MiniCssExtractPlugin({ filename: `style.css${params.bust}` }));

plugins.push(new HtmlWebpackPlugin({
    template: './index.ejs',
    filename: "../index.html",
    inject: true
}));

plugins.push(new webpack.ProvidePlugin({
    Promise: "bluebird",
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
}));

if (isProduction) {
    plugins.push(new Uglify({ sourceMap: true, test: /\.js$/i, parallel: true }));
    plugins.push(new OptimizeCSSAssetsPlugin({}));
} else {
    plugins.push(new webpack.SourceMapDevToolPlugin({
        filename: "[name].map"
    }));
}

plugins.push(new Visualizer({
    filename: "../../artifacts/stats.html"
}));

const p = {};
p.apply = (compiler) => {
    compiler.plugin('done', () => {
        setTimeout(() => console.log("\n\nBuild time: " + new Date().toLocaleString()), 1000);
    });
};

plugins.push(p);



// #####################################
//         LOADER CONFIGURATIONS
// #####################################
const cacheBustLoader = `cache-bust-loader?name=bust&value=${params.bustValue}&types=eot;woff;woff2;svg;ttf;otf;jpg;jpeg;png;ico;gif`;

const loaders = [
    { test: /\.css$/, loader: [MiniCssExtractPlugin.loader, "css-loader?url=false"] },
    { test: /\.scss/, loader: [MiniCssExtractPlugin.loader, "css-loader?url=false", { loader: "sass-loader", options: { sassOptions: { includePaths: ["node_modules"] } } }] },
    { test: /\.html$/, loader: `${cacheBustLoader}!html-loader?attributes=false` },
    { test: /\.ts$/, loader: `${cacheBustLoader}!awesome-typescript-loader`, exclude: [path.resolve("node_modules")] },
    { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff2' },
    { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
];



// #####################################
//         MAIN CONFIGURATION
// #####################################
module.exports = {
    entry: {
        main: "aurelia-bootstrapper"
    },
    output: {
        path: path.resolve('./build/out/assets'),
        filename: `[name].js${params.bust}`,
        sourceMapFilename: `[name].map${params.bust}`,
        publicPath: "assets/"
    },
    plugins: plugins,
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ["app", "node_modules"].map(x => path.resolve(x))
    },
    module: {
        rules: loaders
    },
    devtool: isProduction ? "#source-map" : undefined,
    mode: isProduction ? "production" : "development",
    watch: !isProduction
};
