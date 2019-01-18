import deepmerge from 'deepmerge';
import defaultConfig from './defaultConfig';

module.exports = (newConfig) => {
  const conf = deepmerge(defaultConfig, newConfig, { arrayMerge: (d, s) => s });
  console.log('conf', conf);
  // console.log('AAAA - 1111');
  require('@storybook/addons');
  // console.log('AAAA - 2222');
  if (conf.actions) require('@storybook/addon-actions/register');
  if (conf.knob) require('@storybook/addon-knobs/register');
  if (conf.backgrounds) require('@storybook/addon-backgrounds/register');
  if (conf.options) require('@storybook/addon-options/register');
  // conf.utils && require('react-storybook-addon-utils/register');
};
