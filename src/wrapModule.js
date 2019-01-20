import { action } from '@storybook/addon-actions';

const DEBUG = true;
const createStoriesOf = ({ storybook, React, ...config }) => (...args) => {

  // if (DEBUG) console.log('storiesOf');
  const res = storybook.storiesOf(...args);

  if (config.notes) {
    res.addDecorator(require('@storybook/addon-notes').withNotes);
  }
  if (config.backgrounds) {
    res.addDecorator(require('@storybook/addon-backgrounds').default(config.backgrounds));
  }

  // if (config.info) {
  if (false) {
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
  res.addStyle = () => res;
  res.addHtml = html => res.addDecorator(story => React.createElement('div', {}, [html, story()]));
  // res.addStyle = style => (
  //   res.addDecorator(story => (
  //     React.createElement('div', {}, [
  //       React.createElement('style', {}, String(style)),
  //       story(),
  //     ])
  //   ))
  // );

  return res;
};
//
function wrapModule(story, config) {
  const { storybook } = config;
  const storyParams = {
    action,
    config,
    storybook,
    // storiesOf: storybook.storiesOf,
    storiesOf: createStoriesOf(config),
  };

  if (typeof story === 'function') {
    story(storyParams);
    return;
  } if (typeof story === 'object' && story.__esModule) { // eslint-disable-line  no-underscore-dangle
    for (let key in story) { // eslint-disable-line
      story[key](storyParams);
    }
    return;
  }
  if (DEBUG) {
    console.log('DO SOMETHING ELSE');  //eslint-disable-line
  }
}

export default wrapModule;
