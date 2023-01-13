import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import logo from '../../image/logo.JPG'
import sublogo from '../../image/logo2.png'

const Header = () => {

  const [showContent, setShowContent] = useState(false)

  const LoginMenu = () => {
    return (     
      <>
      <div className='login-menu'>
        <ol>
          <li>
          <Link to={"/model-login"}>Model Login</Link>
          </li>
          <li>
          <Link to={"/fan-login"}>Fan Login</Link>
          </li>
        </ol>
      </div>
      </>
    )
  }

  const ShowLoginMenu = () => {
    setShowContent(!showContent)
  }
 
  return (
    <div>
         <header className="header">
        <div className="header-left">
          <Link to='/'> <img src={sublogo} alt="islandXfans website " /> </Link>
          
        </div>

        <div className="header-right">
          <button type="button" onClick={ShowLoginMenu}>
            Login
            {/* <Link to='/fan-login '>Login</Link> */}
            {showContent && <LoginMenu/>}
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