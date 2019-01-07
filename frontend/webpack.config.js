/**
 * Created by sunlong on 16/1/27.
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

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
            test: /\.(le|c)ss$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    },
                },
            ],
        }, {
            test: /\.(jpg|png|gif)$/,
            use: ['file-loader?name=images/[name].[ext]'],
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: ['file-loader?name=fonts/[name].[ext]'],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),
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
