const path = require('path');
const webpack = require('webpack');

module.exports.devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  performance: {
    hints: 'warning',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 9000,
    hot: true,
  },
};

module.exports.devPlugins = [new webpack.HotModuleReplacementPlugin()];
