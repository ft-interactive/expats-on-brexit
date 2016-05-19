import data from '../../data';
import { SET_FILTER, RESET_FILTERS } from '../../constants';

const initialState = {
  ...data,

  filters: {
    leaningRemain: true,
    leaningLeave: true,
    leaningUnsure: true,

    livingInEU: true,
    livingOutsideEU: true,
    country: false,
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { name, value } = action;
      switch (name) {
        case 'country':
          if (typeof value !== 'string') throw new TypeError('country should be string here, not bool');
          return {
            ...state,
            filters: {
              ...state.filters,
              livingInEU: false,
              livingOutsideEU: false,
              country: value,
            },
          };

        case 'livingInEU':
        case 'livingOutsideEU':
          return {
            ...state,
            filters: {
              ...state.filters,
              [name]: value,
              country: false,
            },
          };

        case 'leaningLeave':
        case 'leaningRemain':
        case 'leaningUnsure':
          return {
            ...state,
            filters: {
              ...state.filters,
              [name]: value,
            },
          };

        default: throw new Error(
          `Cannot set unknown filter "${name}" to value: ${value}`
        );
      }
    }

    case RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters,
      };

    default:
      return state;
  }
}
