import getConfig from './getConfig';

module.exports = (customConfig) => {
  const config = getConfig(customConfig);

  if (config.notes) require('@storybook/addon-notes/register');
  if (config.actions) require('@storybook/addon-actions/register');
  if (config.backgrounds) require('@storybook/addon-backgrounds/register');
  if (config.console) require('@storybook/addon-console');
  if (config.knobs) require('@storybook/addon-knobs/register');
  if (config.links) require('@storybook/addon-links/register');
  if (config.storysource) require('@storybook/addon-storysource/register');
  if (config.viewport) require('@storybook/addon-viewport/register');
  if (config.options) require('@storybook/addon-options/register');
  // if (config.utils) require('react-storybook-addon-utils/register');
};
