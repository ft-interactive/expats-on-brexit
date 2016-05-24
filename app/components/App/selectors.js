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

const selectAppState = state => state.app;

export const selectDesktopFiltersVisible = createSelector(
  selectAppState,
  appState => appState.desktopFiltersVisible
);

export const selectOptions = createSelector(
  selectAppState,
  appState => appState.options
);

export const selectCountries = createSelector(
  selectAppState,
  appState => appState.countries
);

export const selectOpinions = createSelector(
  selectAppState,
  appState => appState.opinions
);

export const selectCurrentFilters = createSelector(
  selectAppState,
  appState => appState.filters
);

const selectFilterFunction = createSelector(
  selectCurrentFilters,
  f => {
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

      return visible;
    };
  }
);

export const selectFilteredOpinions = createSelector(
  selectOpinions,
  selectFilterFunction,
  (opinions, filterFunction) => (
    opinions ? opinions.filter(filterFunction) : []
  ),
);

export const selectFilteredOpinionsCount = createSelector(
  selectFilteredOpinions,
  opinions => opinions.length
);

export const selectMaxVisibleOpinions = createSelector(
  selectAppState,
  appState => appState.maxVisibleOpinions,
);

export const selectVisibleOpinions = createSelector(
  selectFilteredOpinions,
  selectFilteredOpinionsCount,
  selectMaxVisibleOpinions,
  (filteredOpinions, filteredOpinionsCount, maxVisibleOpinions) => (
    maxVisibleOpinions >= filteredOpinionsCount
      ? filteredOpinions
      : filteredOpinions.slice(0, maxVisibleOpinions)
  ),
);

export const selectVisibleOpinionsCount = createSelector(
  selectVisibleOpinions,
  opinions => opinions.length
);

export const selectIsMoreOpinionsAvailable = createSelector(
  selectVisibleOpinionsCount,
  selectFilteredOpinionsCount,
  (visibleOpinionsCount, filteredOpinionsCount) => visibleOpinionsCount < filteredOpinionsCount,
);

export const selectSentenceParts = createSelector(
  selectCurrentFilters,
  selectFilteredOpinionsCount,
  selectCountries,

  (filters, count, countries) => {
    if (count === 0) {
      return [
        { text: '0', mark: true },
        { text: ' respondents match your current filters' },
      ];
    }

    const single = (count === 1);

    const parts = [
      { text: count, mark: true },
      { text: ` expat${single ? '' : 's'} who live${single ? 's' : ''} ` },
    ];

    // add living filter
    if (filters.country) {
      const country = countries.find(c => c.name === filters.country);
      if (!country) throw new Error(`Unknown country: ${filters.country}`);

      parts.push(
        { text: (country.the ? 'in the ' : 'in ') },
        { text: filters.country, mark: true },
      );
    } else if (filters.livingInEU && filters.livingOutsideEU) {
      parts.push({ text: 'anywhere', mark: true });
    } else if (filters.livingInEU) {
      parts.push({ text: 'in the EU', mark: true });
    } else if (filters.livingOutsideEU) {
      parts.push({ text: 'outside the EU', mark: true });
    }

    // add leaning clause
    if (filters.leaningRemain) {
      if (filters.leaningLeave) {
        if (filters.leaningUnsure) {
          parts.push(
            { text: ' and who are leaning ' },
            { text: 'any direction', mark: true },
          );
        } else {
          parts.push(
            { text: ' and who think Britain should ' },
            { text: 'remain', mark: true },
            { text: '/' },
            { text: 'leave', mark: true },
          );
        }
      } else {
        if (filters.leaningUnsure) {
          parts.push(
            { text: ' and who think Britain should ' },
            { text: 'remain', mark: true },
            { text: ' or are ' },
            { text: 'unsure', mark: true },
          );
        } else {
          parts.push(
            { text: ' and who think Britain should ' },
            { text: 'remain', mark: true },
          );
        }
      }
    } else {
      if (filters.leaningLeave) {
        if (filters.leaningUnsure) {
          parts.push(
            { text: ' and who think Britain should ' },
            { text: 'leave', mark: true },
            { text: ' or are ' },
            { text: 'unsure', mark: true },
          );
        } else {
          parts.push(
            { text: ' and who think Britain should ' },
            { text: 'leave', mark: true },
          );
        }
      } else {
        if (filters.leaningUnsure) {
          parts.push(
            { text: ' and who are ' },
            { text: 'unsure', mark: true },
            { text: ' whether Britain should remain or leave' },
          );
        } // else nothing is selected
      }
    }

    return parts;
  }
);
