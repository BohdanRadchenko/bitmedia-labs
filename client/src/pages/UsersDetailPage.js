import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as usersOperations from '../redux/users/usersOperations'
import * as statsOperations from '../redux/stats/statsOperations'
import * as usersSelectors from '../redux/users/usersSelectors'
import * as statsSelectors from '../redux/stats/statsSelectors'
import * as controllerSelectors from '../redux/controller/controllerSelectors'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Charts from "../components/Charts/Charts";


const UsersPage = ({fetchUsersBuId, fetchStatsById, user, stats, page}) => {
  const history = useHistory()
  const userId = Number(history.location.pathname.split('/')[2])

  useEffect(() => {
    fetchUsersBuId(userId)
    fetchStatsById(userId)
  }, [page, fetchUsersBuId, fetchStatsById, userId])

  return (
    <div>
      <Header/>
      <NavBar user={user} />
      {user && stats && (
      <Charts {...{user, stats}} />
      )}
      <Footer/>
    </div>
  )
}

const mSTP = state => ({
  page: controllerSelectors.page(state),
  user: usersSelectors.user(state),
  stats : statsSelectors.stats(state)
})

const mDTP = {
  fetchUsersBuId: usersOperations.fetchUsersById,
  fetchStatsById :  statsOperations.fetchStatsById
}

export default connect(mSTP, mDTP)(UsersPage)