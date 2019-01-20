import { storiesOf, addDecorator } from '@storybook/react';
import getConfig from './getConfig';
import wrapModules from './wrapModules';


module.exports = (customConfig, prjModule) => {
  const config = getConfig(customConfig);

  if (config.modules) {
    if (!prjModule) {
      console.error('!configure.module');
    }
    wrapModules(config.modules, prjModule || module, config);
  }

  if (config.notes) {
    // Глобально не работает, не знаю почему
    // addDecorator(require('@storybook/addon-notes').withNotes);
  }
  if (config.actions) {
    require('@storybook/addon-actions').configureActions(config.actions);
  }
  if (config.backgrounds) {
    // Глобально не работает, не знаю почему
    // const decorator = require('@storybook/addon-backgrounds').default(config.backgrounds);
    // addDecorator(decorator);
  }
  if (config.console) {
    require('@storybook/addon-console').setConsoleOptions(config.console);
    addDecorator((storyFn, context) => require('@storybook/addon-console').withConsole()(storyFn)(context));
  }
  if (config.knobs) {
    addDecorator(require('@storybook/addon-knobs').withNotes);
  }
  // if (config.links) {}
  // if (config.storysource) {}
  if (config.viewport) {
    require('@storybook/addon-viewport').configureViewport(config.viewport);
  }
  if (config.options) {
    require('@storybook/addon-options').setOptions(config.options);
  }
  if (config.utils) {
    // require('react-storybook-addon-utils').configureWithUtils(config.utils);
  }
};
