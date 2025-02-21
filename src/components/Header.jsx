import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
function Header() {
  return (
    <header className='header'> 
        <Link className="site-logo" to='/' >
            MindCheck
        </Link>
    </header>
  )
}

export default Header