const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY_ROOT = path.resolve(__dirname, "src/index.js");
const TEMPLATE_ROOT = path.resolve(__dirname, "src/index.html");
const OUTPUT_ROOT = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: ENTRY_ROOT,
  output: {
    filename: `[name].bundle.js`,
    path: OUTPUT_ROOT,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: OUTPUT_ROOT,
    host: "localhost",
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE_ROOT,
    }),
  ],
};
