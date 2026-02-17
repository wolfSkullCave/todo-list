const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // clears old builds
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/i, // only files ending in .module.css
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.css$/i, // all other CSS files
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"], // no modules
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    // open: true,
  },
  mode: "development",
};
