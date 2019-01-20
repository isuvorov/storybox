// import * as storybook from '@storybook/react';
import wrapModule from './wrapModule';

function wrapModules(stories, module, config) {
  return config.storybook.configure(() => {
    for (const key in stories) {
      wrapModule(stories[key], config);
    }
  }, module);
}
export default wrapModules;
