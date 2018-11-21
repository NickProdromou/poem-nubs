const { baseConfig, basePlugins } = require('./config/base');
const { prodConfig, prodPlugins } = require('./config/prod');
const { devConfig, devPlugins } = require('./config/dev');
const { profilingPlugins } = require('./config/profile');

const isProduction = process.env.NODE_ENV === 'production';

function createWebpackConfig(env) {
  const currentConfig = isProduction ? prodConfig : devConfig;

  const finalConfig = {
    ...baseConfig,
    ...currentConfig,
    plugins: [
      ...basePlugins,
      ...Object.assign(
        [],
        isProduction ? prodPlugins : devPlugins,
        env === 'profile' ? profilingPlugins : {},
      ),
    ],
  };

  return finalConfig;
}

module.exports = createWebpackConfig;
