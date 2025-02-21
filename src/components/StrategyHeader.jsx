import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
function StrategyHeader() {
  return (
      <header className='header-strategies'> 
          <Link className="site-logo" to='/' >
              MindCheck
          </Link>
      </header>
    )
}

export default StrategyHeader