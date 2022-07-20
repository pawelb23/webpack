// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     plugins: [new MiniCssExtractPlugin()],
//     entry: "./src/js/main.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "bundle.js"
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, "dist"),
//         },
//         port: 9000,
//         compress: true
//     },
//     module: {
//         rules: [{
//             test: /\.css$/, //what loaders should be applied
//             // use: ["style-loader", "css-loader"] //what loaders we want to use

//             use: [{
//                     loader: "style-loader",
//                     options: { injectType: "linkTag" },
//                 },
//                 {
//                     loader: "file-loader",
//                     options: { name: "[name].[ext]" }
//                 },

//             ]
//         }]
//     }
// }

// Zapis, który uruchamia wszystko co było podane w założeniach z notatek ze studiów (na poziomie 3.2)
// >> 3.2 CSS - cz. II <<

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPrettierPlugin = require("webpack-prettier-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index-template.ejs", //odwołujemy się do pliku, który wczytuje nam cały niezbędny szablon
      title: "Webpack-Szkolenie-2",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new WebpackPrettierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
};
