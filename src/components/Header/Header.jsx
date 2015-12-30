import React from 'react';
import InlineCss from "react-inline-css";
import styles from './styles.raw.less';

export default React.createClass({

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="component">
        <header>
          <a className="title" href="/">
            <h1>
              <div className="imageContainer">
                <img src="assets/logo.png" alt="Jumpstart" />
              </div>
            </h1>
          </a>
        </header>
      </InlineCss>
    );
  }
});