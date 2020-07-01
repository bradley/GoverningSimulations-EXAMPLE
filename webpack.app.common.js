const path = require("path");

const config = {
  entry: {
    app: path.resolve(__dirname, "app/webpack/entry/App.js"),
    embed: path.resolve(__dirname, "app/webpack/entry/Embed.js")
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "public/dist/static"),
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "loaded_assets",
            publicPath: "/static/loaded_assets"
          }
        }]
      }
    ]
  }
};

module.exports = config;
