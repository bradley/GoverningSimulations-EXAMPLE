const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const common = require("./webpack.app.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/app.ejs"),
      chunks: ["app"],
      filename: path.resolve(__dirname, "public/dist/app.html"),
      // Define any injectable `options` variables:
      environment: process.env.NODE_ENV,
      googleAnalyticsTrackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/embed.ejs"),
      chunks: ["embed"],
      filename: path.resolve(__dirname, "public/dist/embed.html"),
      // Define any injectable `options` variables:
      environment: process.env.NODE_ENV,
      googleAnalyticsTrackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, "public/assets/images/favicon.png"),
      prefix: 'favicons/',
      inject: true,
      favicons: {
        appName: "COVID-19 Death Value",
        appDescription: "COVID-19 Death Value",
        developerName: "bradley.j.griffith@gmail.com",
        developerURL: "http://bradley-griffith.com",
        background: "#DEDEDE",
        theme_color: "#DEDEDE"
      }
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
