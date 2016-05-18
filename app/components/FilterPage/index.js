/**
 * FilterPage
 * Only used on mobile (the desktop site shows filters inline).
 */

import InternalLink from '../../components/InternalLink';
import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


function FilterPage() {
  return (
    <div className={styles.filterPage}>
      FILTER PAGE

      <p>
        <InternalLink route="/">Home</InternalLink>
        <InternalLink route="/form">Form</InternalLink>
      </p>
    </div>
  );
}

export default connect(createStructuredSelector({
  // TODO reflect needed props here, with each one's value being a selector from App/selectors
}))(FilterPage);
