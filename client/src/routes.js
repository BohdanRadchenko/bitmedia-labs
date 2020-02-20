import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AsyncHome, AsyncUsersDetail, AsyncUsers} from "./async.routes";

export const useRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact >
          <AsyncHome/>
        </Route>
        <Route path="/users" exact>
          <AsyncUsers/>
        </Route>
        <Route path="/users/:id" >
          <AsyncUsersDetail/>
        </Route>
        <Redirect to="/home"/>
      </Switch>
    </div>
  )
};