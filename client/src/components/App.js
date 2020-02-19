import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "../routes";
import {Loaders} from "./Loaders";

const App = () => {
  const routes = useRoutes()
  return (<Suspense fallback={<Loaders/>}>
    <Router>
      {routes}
    </Router>
  </Suspense>)
}

export default App