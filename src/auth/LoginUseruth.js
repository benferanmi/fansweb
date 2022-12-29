import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const withAuth = (Component) => {

  return (props) => {
    // const isLoggedIn = checkLoginStatus(); // Replace with your own login status check
    const [isLoggedIn, setIsLoggedIn] = useState(true)
  const navigate = useNavigate();

    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return navigate("model-login"); // Redirect to a login page or show an error message
    }
  }
};

export default withAuth;
