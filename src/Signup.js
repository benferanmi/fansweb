import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import banner from "./image/model/twe.jpg";
import './signup.css'

const Signup = () => {
    const [info, setUserInfo] = useState('please enter your details')

    const [user, setUser] = useState(
        {firstname: '', lastname: '', email: '',
        username: '', password: '', passwordmatch: '', displayname: '',
      }
        )

        const navigate = useNavigate()

        const handleSignUp = (e) => {
            const name = e.target.name
            const value = e.target.value
            setUser({...user, [name]: value})
          }
          const handleSubmit = useCallback((e) => {
            e.preventDefault()
        
           const detailsRequired = user.password && user.email && user.firstname && user.lastname && user.passwordmatch && user.username
        
            if (detailsRequired && user.password === user.passwordmatch ) { 
            localStorage.setItem('isrealfans', JSON.stringify(user))
        
            localStorage.setItem('autenticated', true)
            localStorage.setItem('signup', true)
        
            navigate('/login')
            
            setUser({firstname: '', lastname: '', 
            username: '', password: '', passwordmatch: '',})
            }
            else {
             window.alert(info)
            }
        
          }, [info, navigate, user])
        
  return (
    <>
    <Header />
      <div className="signup">
        <div className="signup-left">
          <img src={banner} alt="" />
        </div>

        <div className="signup-right">
         <div className="signup-head">
         <h1>FAN REGISTRATION</h1>
          <p>Sign up to interact with your idols.</p>
         </div>

          <span>
            <hr /> * <hr />
          </span>

          <form>
            <div className="form-flex">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="firstname"
              onChange={handleSignUp}
              value={user.firstname}
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
              onChange={handleSignUp}
              value={user.lastname}
            />
            </div>
            <div className="form-flex">
            <input
              type="text"
              name="displayname"
              id="displayname"
              placeholder="displayname"
              onChange={handleSignUp}
              value={user.displayname}
              autoComplete="off"
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleSignUp}
              value={user.username}
              autoComplete="off"
            />
            </div>
            <input
              type="email"
              name="email"
              className="email"
              id="email"
              placeholder="Email"
              onChange={handleSignUp}
              value={user.email}
            />

            <div className="form-flex">
            </div>
            <div className="form-flex">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleSignUp}
              value={user.password}
              required
            />
            <input
              type="password"
              name="passwordmatch"
              id="matchpassword"
              onChange={handleSignUp}
              value={user.passwordmatch}
            />
            </div>

            <button type="submit" onClick={handleSubmit}>
              Create Account
            </button>
          </form>
          <div className='form-others'>
                <p>Already Have an account?  <span> Log In.</span></p>
                <p>Are you a Model,  <span> Sign Up here</span></p>

            </div>
        </div>
      </div>
      <Footer />
      </>
  );
};

export default Signup;
