/* @flow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Router } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store/store';

type Props = {
  children?: any
}

export default class Root extends Component {
  props: Props;

  render() {
    return (
      <Provider store={ store }>
        <Router history={ history }>
          {this.props.children}
        </Router>
      </Provider>
    );
  }
}
