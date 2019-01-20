import React from 'react';
import * as storybook from '@storybook/react';
import { action } from '@storybook/addon-actions';
import defaultConfig from './defaultConfig';

const DEBUG = false;
const conf = defaultConfig;

const storiesOf = (...args) => {
  if (DEBUG) console.log('storiesOf');

  const res = storybook.storiesOf(...args);
  if (conf.info) {
    res._add = res.add; // eslint-disable-line  no-underscore-dangle
    res.add = (...args2) => {
      if (DEBUG) console.log('res.add');

      if (res.inAdd) {
        return res._add(...args); // eslint-disable-line  no-underscore-dangle
      }
      res.inAdd = true;
      const result = res.addWithInfo ? res.addWithInfo(...args2) : res._add(...args2); // eslint-disable-line  no-underscore-dangle
      res.inAdd = false;
      return result;
    };
  }
  // res.addHtml = () => res;
  // res.addStyle = () => res;
  res.addHtml = html => res.addDecorator(story => React.createElement('div', {}, [html, story()]));
  res.addStyle = style => (
    res.addDecorator(story => (
      React.createElement('div', {}, [
        React.createElement('style', {}, String(style)),
        story(),
      ])
    ))
  );

  return res;
};
//
const storyParams = {
  action,
  // knob,
  storiesOf,
};

function wrapModule(module, config) {
  if (typeof module === 'function') {
    module(storyParams);
  } else if (typeof module === 'object' && module.__esModule) { // eslint-disable-line  no-underscore-dangle
    for (let key in module) { // eslint-disable-line
      module[key](storyParams);
    }
  } else {
    // console.log('DO SOMETHING ELSE');
  }
}

export default wrapModule;
