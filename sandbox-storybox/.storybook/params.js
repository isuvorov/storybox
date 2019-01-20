import * as storybook from '@storybook/react';

const req = require.context(
  '../stories',
  true,
  /.story.js|.story.js|.story.jsx|.story.jsx$/,
);

export default {
  storybook,
  modules: req.keys().map(req),
  options: {
    name: 'LskGeneral',
  },
};

