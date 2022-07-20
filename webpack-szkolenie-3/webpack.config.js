// Z notatek od 3.3 czyli praca z Babel i dalej Sass, obrazki, Html itd...
// >> 3.3 Babel <<

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
    port: 9500,
    compress: true,
  },

  module: {
    rules: [
      {
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
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
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
      template: "./src/index-template.ejs", //odwołujemy się do pliku, który wczytuje nam cały niezbędny szablon
      title: "Webpack-Szkolenie-3-babel-sass-obrazki",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new WebpackPrettierPlugin(),
  ],
};

//3.6 HTML ---> Poniżej działający kod z notatek

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// module.exports = {
//     entry: "./src/js/main.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "bundle.js"
//     },
//     devServer: {
//         // contentBase: path.join(__dirname,"dist"),
//         port: 9500,
//         // watchContentBase: true
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index-template.ejs"
//         })
//     ],
//     module: {
//         rules: [{
//                 test: /\.scss$/,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     "sass-loader",
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: ["file-loader"]
//             },
//             {
//                 test: /\.(html)$/,
//                 use: ["html-loader"]
//             }
//         ]
//     }
// }
