/**
 * <Filters />
 *
 * This is used for both mobile and desktop control panels, plus the desktop's extra pull-down control panel.
 */

import React, { PropTypes } from 'react';
import Select from 'react-select';
import selectStyles from 'react-select/dist/react-select.css';
import styles from './styles.scss';
import TickBox from '../TickBox';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentFilters, selectCountries } from '../App/selectors';
import { SET_FILTER } from '../../constants';

export function Filters({
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
    <div className={styles.filters}>

      {/* leaning */}
      <div className={styles.filterSet}>
        <h5 className={styles.headline}>Leaning</h5>

        <TickBox ticked={leaningRemain} onToggle={() => setFilter('leaningRemain', !leaningRemain)}>Remain</TickBox>
        <TickBox ticked={leaningLeave} onToggle={() => setFilter('leaningLeave', !leaningLeave)}>Leave</TickBox>
        <TickBox ticked={leaningUnsure} onToggle={() => setFilter('leaningUnsure', !leaningUnsure)}>Unsure</TickBox>
      </div>

      {/* location */}
      <div className={styles.filterSet}>
        <h5 className={styles.headline}>Expats living</h5>

        <TickBox ticked={livingInEU} onToggle={() => setFilter('livingInEU', !livingInEU)}>In the EU</TickBox>
        <TickBox ticked={livingOutsideEU} onToggle={() => setFilter('livingOutsideEU', !livingOutsideEU)}>Outside the EU</TickBox>

        <p>or</p>

        <Select
          className={selectStyles.Select}
          options={countries.map(({ name }) => ({
            label: name,
            value: name,
          }))}
          value={country}
          onChange={({ value }) => setFilter('country', value)}
        />
      </div>
    </div>
  );
}

Filters.propTypes = {
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

  countries: PropTypes.array.isRequired,

  dispatch: PropTypes.func.isRequired,
};

const select = createStructuredSelector({
  values: selectCurrentFilters,
  countries: selectCountries,
});

export default connect(select)(Filters);
