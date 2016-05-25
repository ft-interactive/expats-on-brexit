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
import { push } from 'react-router-redux';
// import { goBack } from 'react-router-redux';

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

      <main>
        <header className="filter-page__header">
          <h6>Filter responses</h6>

          <button
            className="filter-page__close-button"
            onClick={() => {
              // dispatch({ type: RESET_FILTERS });
              dispatch(push('/explore'));
            }}
          >
            <span>Close</span>
          </button>
        </header>

        <Filters />

        <div className={styles.buttons}>
          <InternalLink route="/explore" className="btn btn--dark btn--raised">
            {`Show ${count} filtered responses`}
          </InternalLink>

          <span>{' or '}</span>

          <InternalLink
            route="/explore"
             // className="btn btn--dark"
            onClick={() => {
              dispatch({ type: RESET_FILTERS });
            }}
          >show all</InternalLink>
        </div>
      </main>
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
