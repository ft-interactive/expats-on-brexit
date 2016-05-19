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

export const selectAppState = state => {
  console.log('state', state);
  return state.app;
};

export const selectOptions = createSelector(selectAppState, appState => appState.options);
