const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        scrollreveal: "./src/js/scrollreveal.js",
        swiper: "./src/js/swiper.js",
        index: "./src/js/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name]-bundle.js",
        clean: true,
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        open: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    esModule: false,
                },
            },
            {
                test: /\.(png|jpg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "img",
                    publicPath: "img",
                    esModule: false,
                },
            },
            {
                test: /\.mp4$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "video",
                    publicPath: "video",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-bundle.css",
            chunkFilename: "css/[id].css",
        }),
    ],
};

module.exports = config;
