/**
 * FilterPage
 * Only used on mobile (the desktop site shows filters inline).
 */

import Filters from '../Filters';
import InternalLink from '../InternalLink';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RESET_FILTERS } from '../../constants';
import { selectFilteredOpinionsCount } from '../App/selectors';

function FilterPage({ count, dispatch }) {
  return (
    <div className={styles.filterPage}>
      <InternalLink route="/" className={styles.closeButton}>×</InternalLink>

      <Filters />

      <InternalLink route="/" className={styles.submitButton}>
        {`Show ${count} filtered opinions`}
      </InternalLink>
      <span>{' or '}</span>
      <InternalLink
        route="/"
        className={styles.submitButton}
        onClick={() => {
          dispatch({ type: RESET_FILTERS });
        }}
      >show all</InternalLink>
    </div>
  );
}

FilterPage.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(createStructuredSelector({
  count: selectFilteredOpinionsCount,
}))(FilterPage);
