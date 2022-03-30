const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map', //Lighter source map for production
    module: {
        rules: [
            //Sass, PostCSS and Css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }, 
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),        
    ], 
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    }  
});