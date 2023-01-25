import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import one from '../../image/one.png'

const Footer = () => {
  return (
    <div>
        
      <div className='footer'>
        <div className='footer-links'>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/signup">SignUp</Link></p>
          <p><Link to='/contact'>Contact us </Link></p>
          <p>Home</p>
          <p>Models</p>
          <p><Link to='/privacy'>Privacy Policy</Link></p>
          <p>DMCA</p>
          <p>Terms and Condition</p>
        </div>
        <hr className='footer-hr'></hr>
        <div className="footer-image">
          <a href="www.facebook.com/isrealxfans"><img src={one} alt="banner" /></a>
        </div>

        <div className='footer-text'>
        islandxfans.Com
        </div>

        <div className='footer-text'>
          CopyRight 2023 \ Fow Organisation
        </div>
      </div>
    </div>
  )
}

export default Footer