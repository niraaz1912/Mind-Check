import React from 'react'
import '../styles/strategies.css'
import {NavLink, Outlet} from 'react-router-dom'
function Strategies() {
  const activeStyles ={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: "rgb(191, 143, 0)"
  }
  return (
    <>
        <nav className='host-nav'>
            <NavLink className='strategy-link' to='.'  end style={({isActive})=> isActive? activeStyles: null}>
                Tips
            </NavLink>
            <NavLink className='strategy-link' to='articles'  style={({isActive})=> isActive? activeStyles: null}>
                Articles
            </NavLink>
            <NavLink className='strategy-link' to='videos'  style={({isActive})=> isActive? activeStyles: null}>
                Videos
            </NavLink>
            <NavLink className='strategy-link' to='organizations'  style={({isActive})=> isActive? activeStyles: null}>
                Organizations
            </NavLink>
        </nav>
        <Outlet/> {/*Main content goes here */}
    </>
  )
}

export default Strategies