import React, {useEffect} from "react";
import {connect} from 'react-redux'
import * as usersOperations from '../redux/users/usersOperations'
import * as usersSelectors from '../redux/users/usersSelectors'
import PaginationBar from "../components/PaginationBar/PaginationBar";

const UsersPage = ({fetchUsers, users, page}) => {
  useEffect(() => {
    fetchUsers(page)
  }, [fetchUsers, page])

  return (
    <div>
      <PaginationBar/>
      <ul>
        {users && users.map(el => (
          <li key={el.id}>
            <p>
              {el.first_name}
            </p>
          </li>
        ))}
      </ul>

    </div>
  )
}

const mSTP = state => ({
  users: usersSelectors.users(state)
})

const mDTP = {
  fetchUsers: usersOperations.fetchUsers
}

export default connect(mSTP, mDTP)(UsersPage)