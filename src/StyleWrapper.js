import React, { Component, PropTypes } from 'react';
export default class StyleWrapper extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  };

  insertCss = (styles) => {
    return styles._insertCss();
  }

  getChildContext() {
    return {
      insertCss: this.insertCss,
    };
  }

  render() {
    return this.props.children;
  }
}
