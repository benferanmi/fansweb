import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import '../App.css'
const Header = () => {
  return (
    <div>
         <header className="header">
        <div className="header-left">
          <Link to='/'> ISLANDXFANS</Link>
          
        </div>

        <div className="header-right">
          <button type="button">
            <Link to='/fan-login '>Login</Link>
          </button>
          <button type="button">
          <Link to='/register'>SignUp</Link>
            
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header