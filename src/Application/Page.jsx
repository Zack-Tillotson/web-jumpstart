import React from 'react';
import {connect} from 'react-redux';

import InlineCss from 'react-inline-css';
import styles from './styles';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import DevTools from './DevTools';

import LoginForm from '../components/LoginForm';
import FirebaseStatus from '../components/FirebaseStatus';

import firebase from '../firebase';
import actions from '../firebase/actions';

const selector = (state) => {
  return {};
}

const Page = React.createClass({

  componentDidMount() {
    this.props.firebase.monitorConnection();
    this.props.firebase.syncData('/');
  },

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="component">
        <Header />
        <Body>
          <LoginForm />
          <FirebaseStatus />
        </Body>
        <Footer />
        <DevTools />
      </InlineCss>
    );
  }
});

export default connect(selector, actions)(Page);