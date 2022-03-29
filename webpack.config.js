const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // other values: production, none
    //Where does files come:
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    //Where they go:
    output: {
        path: path.resolve(__dirname, 'dist'),
        //Use [name] in filename to get the entryfile name
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name].[ext]',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 8080,
        open: true, //Launch the default browser when it start webserver
        hot: true, //Hot module reloading (reload files on modifications)
    },
    //loaders
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(ico|gif|png|jpe?g|svg)$/,
                type:'asset/resource'
            },
            /*js for babel, use exclude to avoid babel searching 
            *into node_modules, for babel `use:` need to have an object,
            *install babel with: `npm install -D babel-loader @babel/core @babel/preset-env`
            */
            { 
                test: /\.js$/,
                exclude: /\node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        })
    ],
}