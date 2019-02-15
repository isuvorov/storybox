import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action, configureActions } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withConsole } from '@storybook/addon-console';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { linkTo } from '@storybook/addon-links';
import {
  boolean, number, text, withKnobs,
} from '@storybook/addon-knobs';

import readme from './README.md';

addDecorator(withKnobs);
addDecorator(withNotes);
addDecorator(
  withOptions({
    name: 'DEMO demo!!@@@',
    url: '#',
    // goFullScreen: true,
  }),
);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withBackgrounds([
  { name: 'twitter', value: '#00aced' },
  { name: 'facebook', value: '#3b5998' },
]));

storiesOf('Button', module)

  .add('with text', () => (
    <div>
      <Button
        onClick={() => console.log(123)}
      >
        console.log(123)
      </Button>
      <Button
        onClick={() => console.log({
          some: { strong: [{ language: 123 }] },
        }, 123)}
      >
        console.log(Object)
      </Button>
      <Button
        onClick={action('button-click')}
      >
        {text('text', 'Button text')}
      </Button>
    </div>
  ), {
    // notes: 'A very simple component',
    notes: { markdown: readme },
  })
  .add('First', () => (
    <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
  ))
  .add('with some emoji', () => (
    <Button
      onClick={action('button-click')}
    >
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ));
// .add('Full', () => (
//   <Button onClick={action('button-click')}>Hello Button</Button>
// ))


storiesOf('Test 2', module)
  .add('subtest 1', () => (
    <div>
      subtest 1
    </div>
  ))
  .add('subtest 2', () => (
    <button>subtest 2</button>
  ));

export default () => {};


// https://github.com/isuvorov/react-storybook-addon-utils/tree/master/src
