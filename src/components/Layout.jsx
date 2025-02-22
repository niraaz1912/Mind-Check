import React from 'react'
import Header from './Header'
import StrategyHeader from './StrategyHeader';
import StrategyHeaderWrapper from './StrategyHeader';
import {Outlet, useLocation} from 'react-router-dom'
function Layout() {
  const location = useLocation();
  return (
    <>
         {location.pathname ==='/'? <Header/>: <StrategyHeaderWrapper/>}
         <Outlet/>
    </>
  )
}

export default Layout