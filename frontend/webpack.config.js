/**
 * Created by sunlong on 16/1/27.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        front:['./src/index.js'],
        dashboard:['./src/dashboard.js']
    },
    output: { path: __dirname+"/dist", filename: 'js/[name].js', publicPath:"/" },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{ loader: 'babel-loader' }],
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] }),
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        }, {
            test: /\.(jpg|png|gif)$/,
            use: ['file-loader?name=images/[name].[ext]'],
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: ['file-loader?name=fonts/[name].[ext]'],
        }],
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'css/[id].css' }),
        new HtmlWebpackPlugin({
            chunks:['front'],
            filename:'index.html',
            template: path.join(__dirname,"/index-tmpl.html")
        }),
        new HtmlWebpackPlugin({
            chunks:['dashboard'],
            filename:'dashboard.html',
            template: path.join(__dirname,"/dashboard-tmpl.html")
        }),
        new CopyWebpackPlugin([{ from: 'lib/*', to: './' }]),
    ],
    externals: { //全局引用
    },
    devtool: "#source-map"
};