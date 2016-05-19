import { createSelector } from 'reselect';

// selectLocationState expects a plain JS object for the routing state
export const selectLocationState = () => {
  let prevRoutingState;

  return (state) => {
    const routingState = state.route;

    if (prevRoutingState !== routingState) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

const selectAppState = state => {
  console.log('state', state);
  return state.app;
};

export const selectOptions = createSelector(selectAppState, appState => appState.options);

export const selectCountries = createSelector(selectAppState, appState => appState.countries);

const selectOpinions = createSelector(selectAppState, appState => appState.opinions);

export const selectCurrentFilters = createSelector(selectAppState, appState => appState.filters);

const selectFilterFunction = createSelector(
  selectCurrentFilters,
  f => {
    console.log('selecting filter function based on ', f);

    // return a filtering function suitable for passing to Array#filter
    return o => {
      const visible = ((
        // any matching country
        (f.leaningRemain && o.leaningRemain) ||
        (f.leaningLeave && o.leaningLeave) ||
        (f.leaningUnsure && o.leaningUnsure)
      ) && (
        // any matching location
        (f.livingInEU && o.livingInEU) ||
        (f.livingOutsideEU && o.livingOutsideEU) ||
        (o.country && (f.country === o.country))
      ));

      // console.log('filtering opinion!', visible);

      return visible;
    };
  }
);

const selectFilteredOpinions = createSelector(
  selectOpinions,
  selectFilterFunction,
  (opinions, filterFunction) => (
    opinions ? opinions.filter(filterFunction) : []
  ),
);

export const selectFilteredOpinionsCount = createSelector(selectFilteredOpinions, opinions => opinions.length);

export const selectSentenceParts = createSelector(
  selectCurrentFilters,
  selectFilteredOpinionsCount,

  (filters, count) => {
    const parts = [
      { text: count, mark: true },
      { text: ' expats who live ' },
    ];

    // add living filter
    if (filters.country) {
      parts.push(
        { text: 'in ' },
        { text: filters.country, mark: true },
      );
    } else if (filters.livingInEU && filters.livingOutsideEU) {
      parts.push({ text: 'anywhere', mark: true });
    } else if (filters.livingInEU) {
      parts.push({ text: 'in the EU', mark: true });
    } else if (filters.livingOutsideEU) {
      parts.push({ text: 'outside the EU', mark: true });
    } else throw new Error('impossible selection');

    // TODO add leaning (work out what to do if 2 out of 3 are selected?)

    return parts;
  }
);
