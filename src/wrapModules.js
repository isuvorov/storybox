import * as storybook from '@storybook/react';
import wrapModule from './wrapModule';

function wrapModules(stories, module) {
  return storybook.configure(() => {
    for (const key in stories) {
      wrapModule(stories[key]);
    }
  }, module);
}
export default wrapModules;

