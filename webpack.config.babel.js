import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

var extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css'
 });

module.exports = {

    entry: ['./src/index.js', './src/styles/main.sass'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {

        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },{
            test: /\.sass$/,
            use: extractPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }]

    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    plugins: [
        extractPlugin,
        // new webpack.DefinePlugin({
        //     'process.env': {
        //       'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin()
    ],

    devtool: "cheap-module-source-map",

    watchOptions: {
        aggregateTimeout: 400,
        ignored: /node_modules/
    }
};