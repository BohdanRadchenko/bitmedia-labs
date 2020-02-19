import axios from 'axios';
import {
 fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError
} from './usersActions';

export const fetchUsers = (page) => dispatch => {
  dispatch(fetchUsersRequest());
  axios
    .get(`/api/users?page=${page}&count=50`)
    .then(response => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    });
};