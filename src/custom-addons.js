import deepmerge from 'deepmerge';
import defaultConfig from './defaultConfig';

module.exports = (newConfig) => {
  const conf = deepmerge(defaultConfig, newConfig, {arrayMerge: (d, s) => s});
  require('@kadira/storybook/addons');
  conf.knob && require('@kadira/storybook-addon-knobs/register');
  // conf.backgrounds && require('react-storybook-addon-backgrounds/register');
  conf.options && require('@kadira/storybook-addon-options/register');
  conf.utils && require('react-storybook-addon-utils/register');
}
