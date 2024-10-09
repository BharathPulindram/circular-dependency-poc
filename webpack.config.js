const CircularDependencyPlugin = require("circular-dependency-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CircularDependencyPlugin({
      // Exclude detection of files based on patterns
      exclude: /node_modules/,
      // Show a warning when there is a circular dependency
      failOnError: true, // Fail the build when a circular dependency is detected
      allowAsyncCycles: false, // Set to true to allow async cycles, like in dynamic imports
      cwd: process.cwd(), // Set the current working directory to the project root
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
  mode: "development",
};
