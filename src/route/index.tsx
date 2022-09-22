import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
const Home = React.lazy(() => import('../views/Home'))

const GetRoutes = () => {
  const router = useRoutes([
    {
      path: '/home',
      element: <Home />
    }
  ])

  return router
}

const ConstantRoute = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  )
}

export default ConstantRoute;