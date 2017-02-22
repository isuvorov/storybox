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
    "storybox": "start-storybook -p 9001 -c .storybook",
    "build-storybox": "build-storybook -c .storybook -o .out"
  }
  ...
}
```

7. run `npm run storybox` for dev development or `npm run build-storybox` for building html


## Inspirated by

* storybook
