import React, { Component } from 'react';
import * as storybook from '@kadira/storybook';
const { configure, addDecorator, setAddon, action, storiesOf } = storybook;
import { setOptions as setOptionsAddon } from '@kadira/storybook-addon-options';
import backgroundsAddon from 'react-storybook-addon-backgrounds';
import infoAddon from '@kadira/react-storybook-addon-info';
import * as knob from '@kadira/storybook-addon-knobs';
import _ from 'lodash';
import defaultConfig from './defaultConfig';
import StyleWrapper from './StyleWrapper';

function config(newConfig = {}) {
  const conf = _.merge({}, defaultConfig, newConfig);
  conf.info && setAddon(infoAddon);
  conf.options && setOptionsAddon(conf.options);
  conf.knob && addDecorator(knob.withKnobs);
  conf.backgrounds && addDecorator(backgroundsAddon(conf.backgrounds));
  conf.isomorphicStyles && addDecorator(story => (<StyleWrapper children={story()} />));
}

const storyParams = {
  action,
  knob,
  storiesOf,
};

function wrapModule(module) {
  if (typeof module === 'function') {
    module(storyParams);
  } else if (typeof module === 'object' && module.__esModule) {
    for (let key in module) { // eslint-disable-line
      module[key](storyParams);
    }
  } else {
    console.log('DO SOMETHING ELSE');
  }
}

function wrapModules(stories, module) {
  return configure(() => {
    for (let key in stories) { // eslint-disable-line
      wrapModule(stories[key]);
    }
  }, module);
}

export { configure, storybook, wrapModule, wrapModules, storyParams, addDecorator, config, defaultConfig };
