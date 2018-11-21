const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

module.exports.profilingPlugins = [
  new StatsWriterPlugin({
    transform(data, opts) {
      const stats = opts.compiler.getStats().toJson({ chunkModules: true });
      return JSON.stringify(stats, null, 2);
    },
    filename: 'stats.json',
  }),
  new BundleAnalyzerPlugin(),
];
