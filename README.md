# Storybox
Storybox is a UI development environment for your React components based on React Storybook package with most popular addons and decorators.

This project based on React Storybook package with most popular addons and decorators.

## Quick start
For lazy users

```sh
wget -O - "https://raw.githubusercontent.com/isuvorov/storybox/master/docs/quick-start.sh" | sh
```

## Getting Started

1.
install storybox package:

`yarn add --dev storybox` or
`npm install --save-dev storybox`

adnd

1.a
Install Storybook 2.35.3 by Kadira

`yarn add --dev @kadira/storybook@2.35.3` or
`npm install --save-dev @kadira/storybook@2.35.3`

2.
Attach storybox addons pack, create `.storybook/addons.js`
```js
import 'storybox/addons';
```

3.
Attach main webpack config if you need `.storybook/webpack.config.js`
```js
module.exports = require('../tools/webpack.config')[0]
```

4.
Create glob-pattern file `.storybook/glob.txt`
```glob
./../src/**/@(*.story.js|.story.js|*.story.jsx|.story.jsx)
```

5.
Create file `.storybook/config.js`
```js
import { wrapModules, setConfig } from 'storybox';
setConfig({});
wrapModules(require('glob!./glob.txt'));
```

Or you can configurate projects, using something like this
```js
import { wrapModules, setConfig } from 'storybox';
setConfig({
  options: {
    name: 'MG Beta',
    url: 'https://github.com/isuvorov',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
    sortStoriesByKind: false,
  },
  info: true,
  knob: true,
  isomorphicStyles: true,
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});
wrapModules(require('glob!./glob.txt'));
```

6.
add lines in `package.json`
```js
{
  ...
  "scripts": {
    ...
    "storybook": "start-storybook -p 9001 -c .storybook",
    "build-storybook": "build-storybook -c .storybook -o .out"
  }
  ...
}
```

7. run `npm run storybook` for dev development or `npm run build-storybook` for building html

## Example story

src/Test.story.jsx
```js
import React from 'react';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Test', module)
    .add('default', () => (
      <button onClick={action('click')}>
        Hello World
      </button>
    ))    
    .add('emoji', () => (
      <button onClick={action('click')}>
        Hello 🎃
      </button>
    ));
};

```


## Inspirated by

* storybook
