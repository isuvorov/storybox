import { wrapModules, setConfig } from 'storybox';
setConfig({
  options: {
    name: 'MyExample',
  }
})
wrapModules(require('glob!./glob.txt'), module);
