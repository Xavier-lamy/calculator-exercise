const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        /*
        * Use [name] in filename to get the entryfile name
        * Use [contenthash] between filename and extension to get a unique filename
        * Or name it with a custom name, ex: app.bundle.js:
        */
        filename: '[name].[contenthash].js',
        //Same for the assets name (like images)
        assetModuleFilename: '[name].[ext]',
        //Clear the dist everytime we compile so old files doesn't stay:
        clean: true,
    },
    //loaders
    module: {
        rules: [
            //Sass, PostCSS and Css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    //check for dev or prod, load style-loader on dev and minicssextractplugin on prod
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }, 

            //Create a regex for images, type asset/resource copy it into the distribution file and load it to make it available for js files:
            {
                test: /\.(ico|webp|gif|png|jpe?g)$/, 
                type:'asset/resource'
            },

            //Loader for fonts and SVG:
            {
                test: /\.(woff(2)?|eot|[ot]tf|svg)$/,
                type: 'asset/inline',
            },


            //js for babel, use exclude to avoid babel searching into node_modules: 
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }                
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
    ],
};