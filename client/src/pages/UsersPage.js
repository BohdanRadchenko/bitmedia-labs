import React, {useEffect} from "react";
import {connect} from 'react-redux'
import * as usersOperations from '../redux/users/usersOperations'
import * as statsOperations from '../redux/stats/statsOperations'
import * as usersSelectors from '../redux/users/usersSelectors'
import * as statsSelectors from '../redux/stats/statsSelectors'
import * as controllerSelectors from '../redux/controller/controllerSelectors'
import PaginationBar from "../components/PaginationBar/PaginationBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Users from "../components/Usesrs/Usesrs";
import NavBar from "../components/NavBar/NavBar";

import usersInfoHelpers from "../helpers/users.info.helpers";

const UsersPage = ({fetchUsers, fetchStats, users, stats, page}) => {

  const usersInfo = usersInfoHelpers(users, stats)

  useEffect(() => {
    fetchUsers(page)
    fetchStats()
  }, [page, fetchUsers, fetchStats])

  return (
    <div>
      <Header/>
      <NavBar/>
      {users && (
        <Users users = {usersInfo}/>
      )}
      <PaginationBar/>
      <Footer/>
    </div>
  )
}

const mSTP = state => ({
  page: controllerSelectors.page(state),
  users: usersSelectors.users(state),
  stats : statsSelectors.stats(state)
})

const mDTP = {
  fetchUsers: usersOperations.fetchUsers,
  fetchStats :  statsOperations.fetchStats
}

export default connect(mSTP, mDTP)(UsersPage)