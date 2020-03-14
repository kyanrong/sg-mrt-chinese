import { createAction } from 'redux-actions';

export const Actions = {
  FETCH_STATIONS_REQUEST: 'app/FETCH_STATIONS_REQUEST',
  FETCH_STATIONS_SUCCESS: 'app/FETCH_STATIONS_SUCCESS',
  FETCH_STATIONS_FAILURE: 'app/FETCH_STATIONS_FAILURE',

  UPDATE_SELECTED_STATION: 'app/UPDATE_SELECTED_STATION',
};

const fetchStationsRequest = createAction(Actions.FETCH_STATIONS_REQUEST);
const fetchStationsSuccess = createAction(Actions.FETCH_STATIONS_SUCCESS);
const fetchStationsFailure = createAction(Actions.FETCH_STATIONS_FAILURE);

export const updateSelectedStation = createAction(Actions.UPDATE_SELECTED_STATION);

export const fetchStations = () => {
  return async dispatch => {
    dispatch(fetchStationsRequest());
    try {
      let response = await fetch('/stations');
      response = await response.json();
      dispatch(fetchStationsSuccess(response));
    } catch (err) {
      dispatch(fetchStationsFailure(err));
    }
  };
};
