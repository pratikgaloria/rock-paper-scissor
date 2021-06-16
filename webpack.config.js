const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  devtool: "inline-source-map",
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    host: '0.0.0.0',
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[hash].css" : "[name].css",
      chunkFilename: isProduction ? "[id].[hash].css" : "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json",
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: process.env.NODE_ENV === "development",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: isProduction
                  ? "[hash:base64:5]"
                  : "[name]_[local]-[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                exportLocalsConvention: "camelCase",
              },
              sourceMap: !isProduction,
              importLoaders: 0,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [require("autoprefixer")],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "src/styles"),
      components: path.resolve(__dirname, "src/components"),
      context: path.resolve(__dirname, "src/context"),
      enums: path.resolve(__dirname, "src/enums"),
    },
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
};
