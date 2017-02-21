import { wrapModules, setConfig } from 'lsk-storybook';
setConfig({
  options: {
    name: 'MyExample',
  }
})
wrapModules(require('glob!./glob.txt'), module);
