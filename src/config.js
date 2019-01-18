// // import * as storybook from '@kadira/storybook';
import * as storybook from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { setOptions as setOptionsAddon } from '@storybook/addon-options';
import { action, configureActions } from '@storybook/addon-actions';
import * as knob from '@storybook/addon-knobs';
//
// import infoAddon from 'react-storybook-addon-info';
// import utils from 'react-storybook-addon-utils';
import deepmerge from 'deepmerge';
//
import defaultConfig from './defaultConfig';
import wrapModules from './wrapModules';
// import StyleWrapper from './StyleWrapper';
//
const DEBUG = false;
let conf = defaultConfig;
function config(newConfig = {}) {
  // const
  conf = deepmerge(defaultConfig, newConfig, { arrayMerge: (d, s) => s });
  // conf.options && setOptionsAddon(conf.options);
  if (conf.modules) wrapModules(conf.modules, module);
  if (conf.actions) configureActions(conf.actions);
  if (conf.knob) storybook.addDecorator(knob.withKnobs);
  // if (conf.utils) storybook.addDecorator(utils(conf.utils));
  // if (conf.backgrounds) storybook.addDecorator(backgroundsAddon(conf.backgrounds));
  // if (conf.isomorphicStyles) storybook.addDecorator(story => (<StyleWrapper children={story()} />));
  // if (conf.info) storybook.setAddon(infoAddon);
}

export default config;
