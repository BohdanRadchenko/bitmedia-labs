import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const paginationPageReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionType.HANDLER_PAGE:
      return payload;

    default:
      return state;
  }
};


export default combineReducers({
  paginationPage : paginationPageReducer,
});