import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import banner from "../image/model/twe.jpg";
import "../css/signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [info] = useState("please enter your details");
  const [userType] = useState(["", "model", "user"])
  //mapping around the usertype array ----->>>>> selecting
  const AddUserType = userType.map(Add => Add)

  // handling User Type Selection 
  const handleUserType = (e) => {
    let userT = userType[e.target.value]

    //pushing gender option to the main user array.
    setUser({...user, status: userT})
  }


  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    passwordmatch: "",
    displayName: "",
    status: "",
  });

  const handleSignUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const API_URL = "https://xfansbend.herokuapp.com/api/users";

      const register = async () => {
        const response = await axios.post(API_URL, user);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("res is true")
        }
        return response.data;
      };

      const detailsRequired =
        user.password &&
        user.email &&
        user.firstName &&
        user.lastName &&
        user.passwordmatch &&
        user.userName &&
        user.status;
      //navigating user to login page.......
      if (detailsRequired && user.password === user.passwordmatch && user.status === 'user') {
        register()
        navigate("/login");

        setUser({
          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          passwordmatch: "",
        });
      } 
      //navigating models to additional content 
      else if (detailsRequired && user.password === user.passwordmatch && user.status === 'model') {
       
        register()
        navigate("/modelRegistration")
      }
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
                placeholder="Username"
                onChange={handleSignUp}
                value={user.userName}
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
            <label htmlFor="status-type">What are you reqistering for? </label>
            <select onChange={e => handleUserType(e)}  name="status" id="status-type" className="signup-select">
            {
                    AddUserType.map((address, key) => <option value={key} >{address} </option>)
                }
            </select>

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

export default Signup;
