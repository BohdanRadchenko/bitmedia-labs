import {ActionType} from '../actionType'

// FETCH STATS
export const fetchStatsRequest = () => ({
  type: ActionType.FETCH_STATS_REQUEST,
});

export const fetchStatsSuccess = stats => ({
  type: ActionType.FETCH_STATS_SUCCESS,
  payload : {
    stats,
  }
});

export const fetchStatsError = error => ({
  type: ActionType.FETCH_STATS_ERROR,
  payload : {
    error,
  }
});

// FETCH USERS BY ID
export const fetchStatsByIdRequest = () => ({
  type: ActionType.FETCH_STATS_BY_ID_REQUEST,
});

export const fetchStatsByIdSuccess = stats => ({
  type: ActionType.FETCH_STATS_BY_ID_SUCCESS,
  payload : {
    stats,
  }
});

export const fetchStatsByIdError = error => ({
  type: ActionType.FETCH_STATS_BY_ID_ERROR,
  payload : {
    error,
  }
});