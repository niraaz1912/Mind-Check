import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
function StrategyHeader() {
  return (
      <header className='header-strategies'> 
          {/*<Link className="site-logo" to='/' >
              MindCheck
          </Link>8*/}
          <button className="site-logo">MindCheck</button>
      </header>
    )
}

export default StrategyHeader