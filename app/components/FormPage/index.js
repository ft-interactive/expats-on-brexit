/**
 * FormPage
 * For users to post their own comments.
 */

import InternalLink from '../../components/InternalLink';
import React from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

class FormPage extends React.Component {
  render() {
    return (
      <div className={styles.formPage}>
        FORM PAGE

        <p>
          <InternalLink route="/">Home</InternalLink>
          <InternalLink route="/filter">Filter</InternalLink>
        </p>
      </div>
    );
  }
}

export default connect(createStructuredSelector({
  // TODO reflect needed props here, with each one's value being a selector from App/selectors
}))(FormPage);
