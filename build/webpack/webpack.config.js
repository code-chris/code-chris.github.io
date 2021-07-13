
// #####################################
//         DEFINITIONS
// #####################################

const path = require("path");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const params = require("../scripts/params");
const isProduction = params.prod;


// #####################################
//         PLUGIN CONFIGURATIONS
// #####################################
const plugins = [];

plugins.push(new CopyWebpackPlugin({ patterns: [
    { from: 'content/images/favicon.ico', to: '../content/images[path]/[name][ext]' },
    { from: 'content/common/robots.txt', to: '..' },
    { from: 'build/CNAME', to: '..' }
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

plugins.push(new MiniCssExtractPlugin({ filename: `style.[contenthash].css` }));

plugins.push(new HtmlWebpackPlugin({
    template: './index.ejs',
    filename: "../index.html",
    inject: true
}));

plugins.push(new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
}));


// #####################################
//         LOADER CONFIGURATIONS
// #####################################
const loaders = [
    { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    { test: /\.scss/, use: [MiniCssExtractPlugin.loader, "css-loader", { loader: "sass-loader", options: { sassOptions: { includePaths: ["node_modules"] } } }] },
    { test: /\.html$/, use: [{ loader: "html-loader", options: { esModule: false } }] },
    { test: /\.ts$/, loader: `ts-loader`, exclude: [path.resolve("node_modules")] },
    { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, type: 'asset/inline' },
    { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, type: 'asset/inline' },
    { test: /\.(ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, type: 'asset/resource' }
];



// #####################################
//         MAIN CONFIGURATION
// #####################################
module.exports = {
    target: "web",
    entry: {
        main: "aurelia-bootstrapper"
    },
    output: {
        path: path.resolve('./build/out/assets'),
        filename: `[name][contenthash].js`,
    },
    plugins: plugins,
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ["app", "node_modules"].map(x => path.resolve(x))
    },
    module: {
        rules: loaders
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    devtool: "source-map",
    mode: isProduction ? "production" : "development",
};
