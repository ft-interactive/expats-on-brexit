import data from '../../data';

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
    default:
      return state;
  }
}
