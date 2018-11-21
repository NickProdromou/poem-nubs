const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-flow',
            ],
            plugins: [
              '@babel/plugin-transform-flow-strip-types',
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { minimize: true },
          },
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json'],
  },
};

module.exports.basePlugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new HtmlWebpackPlugin({
    hash: true,
    template: 'src/index.html',
    filename: 'index.html',
  }),
];
