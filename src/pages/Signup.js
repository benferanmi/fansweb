import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import banner from "../image/model/twe.jpg";
import "../css/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [info, setUserInfo] = useState("please enter your details");
  const [userType] = useState(["", "model", "user"])
  //mapping around the usertype array ----->>>>> selecting
  const AddUserType = userType.map(Add => Add)

  // handling User Type Selection 
  const handleUserType = (e) => {
    let userT = userType[e.target.value]

    //pushing gender option to the main user array.
    setUser({...user, client: userT})
  }


  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    passwordmatch: "",
    displayName: "",
    client: "",
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
        user.userName &&
        user.client;
      //navigating user to login page.......
      if (detailsRequired && user.password === user.passwordmatch && user.client === 'user') {
        localStorage.setItem("user", JSON.stringify(user));

        localStorage.setItem("autenticated", true);
        localStorage.setItem("signup", true);
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
      else if (detailsRequired && user.password === user.passwordmatch && user.client === 'model') {
        localStorage.setItem("models", JSON.stringify(user))

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
            <label htmlFor="client-type">What are you reqistering for? </label>
            <select onChange={e => handleUserType(e)}  name="client" id="client-type" className="signup-select">
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
