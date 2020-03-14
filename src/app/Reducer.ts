import { handleActions } from 'redux-actions';

import { Actions } from './actions';

const initialState = {
  data: {
    loading: false,
    success: false,
    error: null,
    value: null,
  },
  selected: {
    value: 'NS1-EW24',
    label: 'Jurong East',
    label_chinese: '裕廊东',
    pinyin: 'yù láng dōng',
  },
};

export default handleActions({
  [Actions.FETCH_STATIONS_REQUEST]: state => ({
    ...state,
    data: {
      ...initialState.data,
      loading: true,
    },
  }),
  [Actions.FETCH_STATIONS_SUCCESS]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      loading: false,
      success: true,
      error: null,
      value: action.payload,
    },
  }),
  [Actions.FETCH_STATIONS_FAILURE]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      loading: false,
      success: false,
      error: action.payload,
      value: null,
    },
  }),
  [Actions.UPDATE_SELECTED_STATION]: (state, action) => ({
    ...state,
    selected: action.payload,
  })
}, initialState);
