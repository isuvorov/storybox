import _ from 'lodash';
import defaultConfig from './defaultConfig';

module.exports = (newConfig) => {
  const conf = _.merge({}, defaultConfig, newConfig);
  require('@kadira/storybook/addons');
  conf.knob && require('@kadira/storybook-addon-knobs/register');
  // conf.backgrounds && require('react-storybook-addon-backgrounds/register');
  conf.options && require('@kadira/storybook-addon-options/register');
  conf.utils && require('react-storybook-addon-utils/register');
}
