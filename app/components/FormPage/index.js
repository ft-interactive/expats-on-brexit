/*
 *
 * FormPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';
import InternalLink from '../../components/InternalLink';

class FormPage extends React.Component {
  render() {
    return (
      <div className={styles.formPage}>
        FORM PAGE

        <p>
          <InternalLink route="/">Home</InternalLink>
        </p>
      </div>
    );
  }
}

export default connect(createStructuredSelector({
  // TODO reflect needed props here, with each one's value being a selector from App/selectors
}))(FormPage);
