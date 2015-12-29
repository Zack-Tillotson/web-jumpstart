import React from 'react';
import InlineCss from "react-inline-css";

import {connect} from 'react-redux';

import styles from './styles';
import selector from './selector.js';
import dispatcher from './actions.js';

const FirebaseStatus = React.createClass({

  componentDidMount() {
    this.props.syncFirebase();
  },

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="component">

        {!this.props.isLoggedIn && (
          "Not Logged In"
        )}

        {this.props.isLoggedIn && (
          "Logged In"
        )}

        Firebase Data: {this.props.data}
        
      </InlineCss>
    );
  }
});

export default connect(selector, dispatcher)(FirebaseStatus);