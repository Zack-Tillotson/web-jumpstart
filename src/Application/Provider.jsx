import React from 'react';

import { Provider } from 'react-redux';
import store from './state/store';

import Page from './Page';

export default React.createClass({
  render() { 
    return (
      <Provider store={store()}>
        <Page />
      </Provider>
    );
  }
});