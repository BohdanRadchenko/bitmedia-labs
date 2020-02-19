import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AsyncHome, AsyncStats, AsyncUsers} from "./async.routes";

export const useRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact >
          <AsyncHome/>
        </Route>
        <Route path="/users" >
          <AsyncUsers/>
        </Route>
        <Route path="/users/:id" >
          <AsyncUsers/>
        </Route>
        <Route path="/stats" >
          <AsyncStats/>
        </Route>
        <Redirect to="/home"/>
      </Switch>
    </div>
  )
};