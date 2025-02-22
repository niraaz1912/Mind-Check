import React, { useEffect, useState } from 'react'
import '../styles/strategies.css'
import {NavLink, Outlet, useLocation} from 'react-router-dom'
import { postFeelingInfo } from '../utils/api';
function Strategies() {
  const [detail, setDetail] = React.useState(null)
  const location = useLocation(); // Get current location
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  
  console.log(detail)
  React.useEffect(()=>{
    async function fetchData() {
      const data = await postFeelingInfo(category)
      if(data){
        setDetail(data)
      }
    }
    fetchData()
  },[])
  if(!detail)
    return <h1>{'<Loading.../>'}</h1>

  const activeStyles ={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: "rgb(191, 143, 0)"
  }
  return (
    <>
        <nav className='host-nav'>
            <NavLink className='strategy-link' to={`.${location.search}'`}  end style={({isActive})=> isActive? activeStyles: null}>
                Tips
            </NavLink>
            <NavLink className='strategy-link' to={`articles${location.search}`}  style={({isActive})=> isActive? activeStyles: null}>
                Articles
            </NavLink>
            <NavLink className='strategy-link' to={`videos${location.search}`}  style={({isActive})=> isActive? activeStyles: null}>
                Videos
            </NavLink>
            <NavLink className='strategy-link' to={`organizations${location.search}`}  style={({isActive})=> isActive? activeStyles: null}>
                Organizations
            </NavLink>
        </nav>
        
        <p>{`Your condition is ${detail.category}`}</p>
        <Outlet context={{detail}}/> {/*Main content goes here */}
    </>
  )
}

export default Strategies