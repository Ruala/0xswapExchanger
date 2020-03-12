'use strict';
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob-all');
const CssNanoPlugin = require('cssnano-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const extractLess = new ExtractTextPlugin({
    filename: "styles/[name].[hash].css",
});

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    stats: 'errors-only',
    optimization: {
        minimize: true,
        minimizer: [
            new CssNanoPlugin(),
            new UglifyJsPlugin(),
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin({filename: 'bundle.css'}),
        // compiling mode “scope hoisting”
        new webpack.optimize.ModuleConcatenationPlugin(),
        extractLess,
        new PurifyCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, '../src/*.html'),
                // path.join(__dirname, '../_includes/*.html'),
            ]),
            purifyOptions: {
                whitelist: [
                    '*uk-offcanvas-bar*',
                    '*select2*',
                    '*exchange__item*',
                ],
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                use: extractLess.extract(['css-loader?minimize=true', 'less-loader'])
            }
        ]
    }
});
