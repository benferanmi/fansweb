import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export const withAuth = (Component) => {

  return (props) => {
    // const isLoggedIn = checkLoginStatus(); // Replace with your own login status check
    const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === "gh67Pisx678ilhe89054Ikd4mUi80P1wJu5") {
      navigate('/model-login');
    } else if (isLoggedIn === "52DF12dh875po96m3a10loo0sils0qoa1ej5hs853uom74a58w4meYf45hgi2sl") {
      return <Component {...props} />;
    } else {
      navigate('/register')
    }
  }, [ isLoggedIn, navigate, props]);

  }
};

