import React from 'react';

export default (params) => {
  console.log('storyParams', params);
  const { storiesOf, action } = params;
  return storiesOf('Button', module)
    .add('react', () => (
      React.createElement('div', {}, 'Button')
    ))
    .add('jsx', () => (
      <button>Hello button</button>
    ))
    .add('action', () => (
      <button onClick={action('clicked')}>Hello button</button>
    ));
};

// module.exports = function ({ storiesOf }) {
//   return storiesOf('Button', module)
//     .add('with text', () => React.createElement('button', {}, 'Button'));
//   // .add('with text', () => (
//   //   <button onClick={action('clicked')}>Hello button</button>
//   // ))
//   // .add('with some emoji', () => (
//   //   <button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
//   // ));
// };
