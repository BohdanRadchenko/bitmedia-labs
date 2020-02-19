import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_SUCCESS:
      return payload.users;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_REQUEST:
      return true;

    case ActionType.FETCH_USERS_SUCCESS:
    case ActionType.FETCH_USERS_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_REQUEST:
    case ActionType.FETCH_USERS_SUCCESS:
      return null;

    case ActionType.FETCH_USERS_ERROR:
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