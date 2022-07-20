// Od 3.7 z notatek, czyli czyszczenie folderu dist przed build

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPrettierPlugin = require("webpack-prettier-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 9750,
        compress: true,
    },

    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }]
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }, ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    // "file-loader",
                    {
                        // loader: "image-webpack-loader",
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            esModule: false, //bardzo ważne jest dodanie tej linijki, aby można było wstawic <img/> z poziomu html, ten zapis pozwala prawidłowo wczytać nasze obrazki aplikacji
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index-template.ejs", //odwołujemy się do pliku, który wczytuje nam cały niezbędny szablon
            title: "Webpack-Szkolenie-4-Czyszczenie-dist-hashing-minifikacja",
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            // filename: "style.css",
            filename: "[name].[hash].css", //nie wiem czy to tu zadziała prawidłowo, możliwe, że należy tu użyć: >> filename: "style.css", <<
        }),
        new CleanWebpackPlugin(),

        new WebpackPrettierPlugin(),
    ],
};