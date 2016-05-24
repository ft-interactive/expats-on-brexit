/**
 * ControlBar - the sticky bar containing the entence-and-buttons summary and buttons.
 *
 * Both mobile and desktop. (But the 'write comment' button is hidden on mobile, and the 'filter' button behaves differently, taking you to a different page on mobile.)
 *
 * Sticky behaviour might be a bit different on mobile, pulling itself up.
 */

import classnames from 'classnames';
import Filters from '../Filters';
import InternalLink from '../InternalLink';
// import OnlyDesktop from '../OnlyDesktop';
import OnlyMobile from '../OnlyMobile';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RESET_FILTERS, DEACTIVATE_DROPDOWN_FILTERS, ACTIVATE_DROPDOWN_FILTERS } from '../../constants';
import {
  selectSentenceParts, selectFilteredOpinionsCount, selectAreDropdownFiltersActive,
  selectAnyFiltersChanged,
} from '../App/selectors';

function ControlBar({
  sentenceParts, count, areDropdownFiltersActive, dispatch, anyFiltersChanged,
}) {
  return (
    <div
      className={classnames('control-bar', {
        'control-bar--dropdown-filters-visible': areDropdownFiltersActive,
      })}
    >
      <div className="control-bar__inner">
        <section className="control-bar__dropdown-filters-wrapper">
          <header>
            <h6>Filter comments</h6>

            {anyFiltersChanged ? (
              <button
                className="link"
                onClick={() => {
                  dispatch({ type: RESET_FILTERS });
                }}
              >Reset filters</button>
            ) : null}
          </header>

          <Filters horizontal />
        </section>

        <div className="control-bar__sentence-and-buttons">
          <div className="control-bar__buttons">
            <OnlyMobile>
              <InternalLink route="/filter" className="control-bar__mobile-filter-button btn">Filter</InternalLink>
            </OnlyMobile>
          </div>

          <p className="control-bar__sentence">
            {sentenceParts.map(({ text, mark }, i) => (
              mark
                ? <mark key={i}>{text}</mark>
                : <span key={i}>{text}</span>
            ))}
          </p>
        </div>

        <button
          className="control-bar__toggle-dropdown-filters"
          onClick={() => {
            dispatch({ type: areDropdownFiltersActive ? DEACTIVATE_DROPDOWN_FILTERS : ACTIVATE_DROPDOWN_FILTERS });
          }}
        >
          {areDropdownFiltersActive ? 'Hide filters' : 'Adjust filters'}
        </button>
      </div>
    </div>
  );
}

ControlBar.propTypes = {
  sentenceParts: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  areDropdownFiltersActive: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  anyFiltersChanged: PropTypes.bool.isRequired,
};

const select = createStructuredSelector({
  sentenceParts: selectSentenceParts,
  count: selectFilteredOpinionsCount,
  areDropdownFiltersActive: selectAreDropdownFiltersActive,
  anyFiltersChanged: selectAnyFiltersChanged,
});

export default connect(select)(ControlBar);
