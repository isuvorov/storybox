module.exports = function (baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\.story\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  return defaultConfig;
};