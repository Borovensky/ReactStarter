import path from 'path';
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
        // new UglifyJsPlugin()
    ],

    devtool: "source-map",


    watchOptions: {
        aggregateTimeout: 400,
        ignored: /node_modules/
    }
};