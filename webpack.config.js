const path = require('node:path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const baseConfig = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    index: './src/js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/images',
          to: './images',
        },
      ],
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [
              autoprefixer()
          ]
      }
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};

module.exports = ({ mode }) => {
  return mode === 'development' ? merge(baseConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
      static: {
        directory: path.resolve(__dirname, '../dist'),
      },
      compress: true,
      port: 9000,
    },
  }) : baseConfig;
};