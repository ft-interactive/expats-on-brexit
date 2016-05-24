/**
 * <Filters />
 *
 * The UI for toggling filters on and off.
 *
 * Optional 'horizontal' flag for a wider layout.
 */

// import 'react-select/dist/react-select.css';

import classnames from 'classnames';
import React, { PropTypes } from 'react';
import Select from 'react-select';
import TickBox from './TickBox';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentFilters, selectCountries } from '../App/selectors';
import { SET_FILTER } from '../../constants';

export function Filters({
  horizontal,
  countries, dispatch,
  values: {
    leaningLeave, leaningRemain, leaningUnsure,
    livingInEU, livingOutsideEU, country,
  },
}) {
  const setFilter = (name, value) => {
    dispatch({ type: SET_FILTER, name, value });
  };

  return (
    <div className={classnames('filters', { 'filters--horizontal': horizontal })}>

      {/* leaning */}
      <div className={'filters__filter-set'}>
        <h5 className={'filters__heading'}>Leaning</h5>

        <TickBox icon="eu-flag" ticked={leaningRemain} onToggle={() => setFilter('leaningRemain', !leaningRemain)}>Remain</TickBox>
        <TickBox icon="exit-door" ticked={leaningLeave} onToggle={() => setFilter('leaningLeave', !leaningLeave)}>Leave</TickBox>
        <TickBox icon="question-mark" ticked={leaningUnsure} onToggle={() => setFilter('leaningUnsure', !leaningUnsure)}>Unsure</TickBox>
      </div>

      {/* location */}
      <div className={'filters__filter-set'}>
        <h5 className={'filters__heading'}>Expats living</h5>

        <TickBox icon="in-eu" ticked={livingInEU} onToggle={() => setFilter('livingInEU', !livingInEU)}>In the EU</TickBox>
        <TickBox icon="outside-eu" ticked={livingOutsideEU} onToggle={() => setFilter('livingOutsideEU', !livingOutsideEU)}>Outside the EU</TickBox>

        {' '}
        <p className={'filters__big-or'}>or</p>
        {' '}

        <Select
          style={{ boxSizing: 'content-box' }}
          className={classnames('filters__country-selector')}
          matchPos="start"
          placeholder="Choose a country..."
          options={countries.map(({ name }) => ({
            label: name,
            value: name,
          }))}
          value={country}
          onChange={(change) => setFilter('country', change && change.value)}
        />
      </div>
    </div>
  );
}

Filters.propTypes = {
  countries: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,

  values: PropTypes.shape({
    leaningLeave: PropTypes.bool.isRequired,
    leaningRemain: PropTypes.bool.isRequired,
    leaningUnsure: PropTypes.bool.isRequired,

    livingInEU: PropTypes.bool.isRequired,
    livingOutsideEU: PropTypes.bool.isRequired,

    country: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
};

const select = createStructuredSelector({
  values: selectCurrentFilters,
  countries: selectCountries,
});

export default connect(select)(Filters);
