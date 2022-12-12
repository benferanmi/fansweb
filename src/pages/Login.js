import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import banner from "../image/model/twe.jpg";
import "../css/login.css";
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState({ userName: "", password: "" });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const API_URL = "https://xfansbend.herokuapp.com/api/users/";

    const login = async () => {
      const response = await axios.post(API_URL + "login", data);
      if (response.data) {
        localStorage.setItem("ldata", JSON.stringify(response.data));
      }
      return response.data;
    };

    const data = JSON.parse(localStorage.getItem("isrealfans"));
    console.log(data.username);
    if (data.username !== user.userName && data.password !== user.password) {
      console.log("details is not correct");
      window.alert("The details you input is not correct. Kindly input your username and password again...")
    } else {
      console.log("details is correct");

      // navigate("/");
      window.alert("login sucessful");
      localStorage.setItem("signup", true);
    }
  };
  return (
    <>
      <Header />
      <div className="login">
        <div className="login-left">
          <img src={banner} alt="" />
        </div>

        <div className="login-right">
          <h1>LOG IN</h1>

          <span>
            <hr /> * <hr />
          </span>

          <form>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your Username"
              onChange={handleSignUp}
              value={user.userName}
              required
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleSignUp}
              value={user.password}
              required
            />
            <div className="form-option">
              <label htmlFor="remember">
                <input type="checkbox" name="remember" /> Remember me
              </label>

              <p>Forget Password?</p>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </form>

          <div className="form-others">
            <p>
              Don't have an account yet? <span> Sign up here.</span>
            </p>
            <p>
              Email Verification, <span> Resend here.</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
