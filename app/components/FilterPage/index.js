/**
 * FilterPage
 * Only used on mobile - the desktop site shows filters inline, inside a ControlBar component.
 */

import Filters from '../Filters';
import InternalLink from '../InternalLink';
import SiteHeader from '../SiteHeader';
import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RESET_FILTERS } from '../../constants';
import { selectFilteredOpinionsCount } from '../App/selectors';
import { goBack } from 'react-router-redux';

function FilterPage({ count, dispatch }) {
  return (
    <div className={styles.filterPage}>
      <SiteHeader />
      {/*<button
        className="btn"
        onClick={() => {
          dispatch(goBack());
        }}
      >×</button>*/}

      <Filters />

      <div className={styles.buttons}>
        <InternalLink route="/" className="btn btn--dark btn--raised">
          {`Find ${count} filtered opinions`}
        </InternalLink>

        <span>{' or '}</span>

        <InternalLink
          route="/"
           // className="btn btn--dark"
          onClick={() => {
            dispatch({ type: RESET_FILTERS });
          }}
        >show all</InternalLink>
      </div>
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
