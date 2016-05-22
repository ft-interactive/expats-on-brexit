/**
 * FormPage
 * For users to post their own comments.
 */

import InternalLink from '../../components/InternalLink';
import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function FormPage() {
  return (
    <div className={styles.formPage}>
      <h1>
        WRITE A COMMENT
      </h1>

      <p>
        <InternalLink route="/explore">go back</InternalLink>
      </p>
    </div>
  );
}

export default connect(createStructuredSelector({
  // TODO reflect needed props here, with each one's value being a selector from App/selectors
}))(FormPage);
