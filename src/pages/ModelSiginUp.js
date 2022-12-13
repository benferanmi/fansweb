import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
// import banner from "../image/model/twe.jpg";
import "../css/signup.css";
// import axios from "axios";

const ModelSignUp = () => {
  const navigate = useNavigate();
  const [info] = useState("please enter your details");
  //mapping around the usertype array ----->>>>> selecting
  // const AddUserType = userType.map(Add => Add)

  // handling User Type Selection 
  // const handleUserType = (e) => {
  //   let userT = userType[e.target.value]

  //   //pushing gender option to the main user array.
  //   setUser({...user, status: userT})
  // }

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    passwordmatch: "",
    displayName: "",
    country: "",
    status: "model",
  });

  const handleSignUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
    

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();      

      const detailsRequired =
        user.password &&
        user.email &&
        user.firstName &&
        user.lastName &&
        user.passwordmatch &&
        user.userName;
      //navigating user to login page.......
      if (!user.email) {
        window.alert("kindly enter your email")
      } else if (!user.firstName) {
        window.alert("Kindly input your password")
      } else if (!user.lastName) {
        window.alert("kindly input your last name")
      } else if (!user.userName) {
        window.alert("kindly input your username ")
      } else if (user.password !== user.passwordmatch) {
        window.alert("password does not match")
      } else if (detailsRequired && user.password === user.passwordmatch) {
        // registerModels()
        localStorage.setItem("modelDetails", JSON.stringify(user))
        navigate("/modelRegistration");

        setUser({
          firstName: "",
          email: "",
          lastName: "",
          userName: "",
          password: "",
          passwordmatch: "",
          displayName: "",
        });
      } 
      //navigating models to additional content 
      else {
        window.alert(info);
      }
    },
    [info, navigate, user]
  );

  return (
    <>
      <Header />
      <div className="signup">
        <div className="signup-right">
          <div className="signup-head">
            <h1>Model REGISTRATION</h1>
            <p>Sign up to make money and interact with your fans.</p>
          </div>

          <form>
            <div className="form-flex">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="firstname"
                onChange={handleSignUp}
                value={user.firstName}
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Lastname"
                onChange={handleSignUp}
                value={user.lastName}
              />
            </div>
            <div className="form-flex">
              <input
                type="text"
                name="displayName"
                id="displayName"
                placeholder="displayname"
                onChange={handleSignUp}
                value={user.displayName}
                autoComplete="off"
              />
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username e.g user1234, fan4543....."
                onChange={handleSignUp}
                value={user.userName}
                autoComplete="off"
              />
            </div>
            <input
            className="fwh1"
            placeholder="enter your country full details"
              type="text"
              name="country"
              value={user.country}
              onChange={handleSignUp}
            />
            <input
              type="email"
              name="email"
              className="email"
              id="email"
              placeholder="Email"
              onChange={handleSignUp}
              value={user.email}
            />

            <div className="form-flex"></div>
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
            {/* <label htmlFor="status-type">What are you reqistering for? </label>
            <select onChange={e => handleUserType(e)}  name="status" id="status-type" className="signup-select">
            {
                    AddUserType.map((address, key) => <option value={key} >{address} </option>)
                }
            </select> */}

            <button type="submit" onClick={handleSubmit}>
              Create Account
            </button>
          </form>
          <div className="form-others">
            <p>
              Already Have an account? <span> Log In.</span>
            </p>
            <p>
              Are you a Model, <span> Sign Up here</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModelSignUp;
