import React from 'react';

import InlineCss from 'react-inline-css';
import styles from './styles';

import Header from '../components/Header';
import FirebaseStatus from '../components/FirebaseStatus';
import Footer from '../components/Footer';
import DevTools from './DevTools';

const Page = React.createClass({

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="component">
        <Header />
        <FirebaseStatus />
        <Footer />
        <DevTools />
      </InlineCss>
    );
  }
});

export default Page;