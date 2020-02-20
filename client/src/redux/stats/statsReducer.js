import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_STATS_SUCCESS:
      return payload.stats;

    case ActionType.FETCH_STATS_BY_ID_SUCCESS:
      return payload.stats;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_STATS_REQUEST:
    case ActionType.FETCH_STATS_BY_ID_REQUEST:
      return true;

    case ActionType.FETCH_STATS_SUCCESS:
    case ActionType.FETCH_STATS_BY_ID_SUCCESS:
    case ActionType.FETCH_STATS_ERROR:
    case ActionType.FETCH_STATS_BY_ID_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_STATS_REQUEST:
    case ActionType.FETCH_STATS_BY_ID_REQUEST:
    case ActionType.FETCH_STATS_SUCCESS:
    case ActionType.FETCH_STATS_BY_ID_SUCCESS:
      return null;

    case ActionType.FETCH_STATS_ERROR:
    case ActionType.FETCH_STATS_BY_ID_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});