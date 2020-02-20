import axios from 'axios';
import {
 fetchStatsRequest,
  fetchStatsSuccess,
  fetchStatsError,
  fetchStatsByIdRequest,
  fetchStatsByIdSuccess,
  fetchStatsByIdError,
} from './statsActions';

export const fetchStats = () => dispatch => {
  dispatch(fetchStatsRequest());
  axios
    .get('/api/stats')
    .then(response => {
      dispatch(fetchStatsSuccess(response.data.stats));
    })
    .catch(error => {
      dispatch(fetchStatsError(error));
    });
};

export const fetchStatsById = (id) => dispatch => {
  dispatch(fetchStatsByIdRequest());
  axios
    .get(`/api/stats/${id}`)
    .then(response => {
      dispatch(fetchStatsByIdSuccess(response.data.stats));
    })
    .catch(error => {
      dispatch(fetchStatsByIdError(error));
    });
};
