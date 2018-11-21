module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
  ],
  retainLines: true,
};
