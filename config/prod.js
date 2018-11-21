const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports.prodConfig = {
  mode: 'production',
  performance: {
    hints: 'error',
    maxEntrypointSize: 250000,
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js') || assetFilename.endsWith('.css');
    },
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName}`;
          },
        },
      },
    },
  },
};

module.exports.prodPlugins = [new webpack.HashedModuleIdsPlugin()];
