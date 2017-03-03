import { config } from 'storybox';
config({
  options: {
    name: 'YourComponent',
  },
  modules: require('glob!./glob.txt'),
});
