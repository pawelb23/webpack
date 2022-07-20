// Od 3.9 z notatek, czyli czyszczenie folderu dist przed build

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPrettierPlugin = require("webpack-prettier-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

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
    port: 9900,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader", //ta kolejność ma ogromne znaczenie (css razem po sobie i na końcu musi być sass)
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
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
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index-template.ejs", //odwołujemy się do pliku, który wczytuje nam cały niezbędny szablon
      title: "Webpack-Szkolenie-5-(Od Minifikacja [3.9] do końca notatek)",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      filename: "style.css",
    }),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 9100,
        proxy: "http://localhost:9900",
      },
      {
        reload: false,
      }
    ),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new WebpackPrettierPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "../dest" },
        { from: "./src", to: "../dest" },
      ],
    }),
  ],
};
