import data from '../../data';
import {
  SET_FILTER, RESET_FILTERS, ACTIVATE_DROPDOWN_FILTERS, DEACTIVATE_DROPDOWN_FILTERS,
  SHOW_MORE_OPINIONS,
} from '../../constants';

const INITIAL_MAX_VISIBLE_OPINIONS = 20;
const OPINIONS_INCREMENT = 20;

const initialState = {
  ...data,

  areDropdownFiltersActive: false,

  maxVisibleOpinions: INITIAL_MAX_VISIBLE_OPINIONS,

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
          if (!value) {
            return {
              ...state,
              maxVisibleOpinions: INITIAL_MAX_VISIBLE_OPINIONS,
              filters: {
                ...state.filters,
                livingInEU: true,
                livingOutsideEU: true,
                country: false,
              },
            };
          }

          return {
            ...state,
            maxVisibleOpinions: INITIAL_MAX_VISIBLE_OPINIONS,
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
            maxVisibleOpinions: INITIAL_MAX_VISIBLE_OPINIONS,
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
            maxVisibleOpinions: INITIAL_MAX_VISIBLE_OPINIONS,
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
        maxVisibleOpinions: INITIAL_MAX_VISIBLE_OPINIONS,
        filters: initialState.filters,
      };

    case ACTIVATE_DROPDOWN_FILTERS:
      return {
        ...state,
        areDropdownFiltersActive: true,
      };

    case DEACTIVATE_DROPDOWN_FILTERS:
      return {
        ...state,
        areDropdownFiltersActive: false,
      };

    case SHOW_MORE_OPINIONS:
      return {
        ...state,
        maxVisibleOpinions: state.maxVisibleOpinions + OPINIONS_INCREMENT,
      };

    default:
      return state;
  }
}
