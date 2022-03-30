const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    //Sur la dev on va pouvoir mettre les options du serveur
    mode: 'development',
    devtool: 'inline-source-map', //source map for dev
    module: {
        rules: [
            //Sass, PostCSS and Css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },  
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080, //Default
        open: true,
        hot: true,
    },
}); 