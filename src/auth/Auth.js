import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Auth = (Component, props) => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const navigate = useNavigate();
    const [showComponent, setShowComponent] = useState(false)

    useEffect(() => {
        if (isLoggedIn === "gh67Pisx678ilhe89054Ikd4mUi80P1wJu5") {
      navigate('/model-login');
    } else if (isLoggedIn === "52DF12dh875po96m3a10loo0sils0qoa1ej5hs853uom74a58w4meYf45hgi2sl") {
      setShowComponent(true)
      console.log("okay")
    } else {
      navigate('/register')
    }
    }, [isLoggedIn, navigate])


  return ( 
    <>
    {showComponent && <Component {...props} />}
    </>
  )
}

export default Auth
