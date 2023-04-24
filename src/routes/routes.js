import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import paths from '../constants/paths'
import { Login, Cadastro} from '../containers'
// import { PrivateRoute } from './private-route'

function AllRoutes () {
  return (
    <Router>
      <Routes>
        <Route Component={Login} path={paths.Login} />
        <Route Component={Cadastro} path={paths.Cadastro} />
        {/* <PrivateRoute exact component={Home} path={paths.HomeInit} /> */}
      </Routes>
    </Router>
  )
}

export default AllRoutes 
