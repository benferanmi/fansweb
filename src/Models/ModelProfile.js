import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import './profile.css'
import "./modeldetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { MessageSvg, ShareSvg } from "../Component/Svg";
import ModelInfo from "./ModelInfo";
// import {Buffer} from 'buffer'


const ModelProfile = () => {

  const [profileImage, setProfileImage] = useState()
  const [showAbout, setShowAbout] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState(null);

  const AboutShowhandler = () => {
    setShowAbout(!showAbout);
  };  

  const AboutContent = () => {
    return userDetail.description;
  };

  //geting the user id and token from the localstorage
  let userDetail = JSON.parse(localStorage.getItem("user"));
  const id = userDetail._id;
  const token = userDetail.token;
   const bgimg = userDetail.backgroundImage
   console.log(bgimg.data.data)

       // Read the image file and convert it to a buffer


  const handleImageUpload = (event) => {
    event.preventDefault();

    //getting the image file
    const file = event.currentTarget["fileInput"].files[0];
    const formData = new FormData();
    formData.append("backgroundProfileImage", file);

    //api i am adding the image file to 
    const API_URL = `https://xfansbend.herokuapp.com/api/users/updateBackgroundProfileImage/${id}`;

    //using axios put method to send the image data to database.
    axios.put(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    //handling errors and success
    .then(response => {
      // Handle success
      console.log('Success:', response);
    })
    .catch(error => {
      // Handle error
      console.log('Error:', error);
      window.alert("Kindly upload Your Profile image again. Ensure that the image that you choose is in jpeg or jpg format as our website does not support webp images due to license issues" + error)
    });

  };
  //event handler for profile image upload

  const handleProfile = (event) => {
    event.preventDefault();

    //getting the image file
    const file = event.currentTarget["fileInput"].files[0];
    const formData = new FormData();
    formData.append("profileImage", file);

    //api i am adding the image file to 
  const API_URL = `https://xfansbend.herokuapp.com/api/users/updateProfileImage/${id}`;


    //using axios put method to send the image data to database.
    axios.put(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    //handling errors and success
    .then(response => {
      // Handle success
      console.log('Success:', response);
      localStorage.setItem('profileimage', JSON.stringify(response))
      setProfileImage(response)
    })
    .catch(error => {
      // Handle error
      console.log('Error:', error);
      window.alert("Kindly upload Your Profile image again. Ensure that the image that you choose is in jpeg or jpg format as our website does not support webp images due to license issues" + error)
    });

  };
  return (
    <>
    <Header />
    <div className="header-space">
      
    </div>
    <div className="sin-profile">
    <div className="profile-bg-image">
      <div className="profile-bg-button">
      <form onSubmit={handleImageUpload}>
        <input id="fileInput" type="file" />
        <button type="submit"> Update Background Image</button>
      </form>
      </div>
      <img src="" alt="my background imgge" />
    </div>
    {/* section for profile image update view and update buttons starts  */}
    <div className="profile-p-image">
      <div className="profile-p-button">
      <form onSubmit={handleProfile}>
        <input id="fileInput" type="file" />
        {/* <input type="submit" /> */}
        <button type="submit"> Update Profile Image</button>
      </form>
      </div>
    </div>    
    {/* section for profile image update view and update buttons ends */}

    <div className="modeldetails">
        <section className="details-section-one">
          <div className="details-name">
            <p className="mainname">
              {userDetail.displayName} {userDetail.verified}
            </p>
            <p className="name2">@ {userDetail._id}</p>
          </div>

          <div className="details-head button">
            <button type="button" className="pri-button">
              <span className="svg-space">{MessageSvg}</span> Message
            </button>
            <button
              type="button"
              className="pri-button-2"
              // onClick={shareProfileHandler}
            >
              <span className="svg-space">{ShareSvg}</span> Share Profile
            </button>
          </div>
        </section>

        <section className="details-about">
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faArrowCircleDown}
              color="gold"
              onClick={AboutShowhandler}
            />{" "}
            About me{" "}
          </h3>
          <div>
            <p>{showAbout && <AboutContent />}</p>
          </div>
          firstName = {userDetail.firstName} <br/> lastName = {userDetail.lastName}
        </section>

        <section className="details-spec">
          <div className="spec-1">
            <p>Gender: {userDetail.gender}</p>
            <p>Weight: {userDetail.weight}</p>
          </div>
          <div className="spec-2">
            <p>Sexual orientation: {userDetail.sextualOrientation}</p>
            <p>Eye Color: {userDetail.eyesColor}</p>
          </div>
          <div className="spec-3">
            <p>Height: {userDetail.height}</p>
            <p>Zip-Code: {userDetail.zipCode}</p>
          </div>
        </section>

        <section className="details-button">
          <button type="button">Monthly Subscription | $9.99</button>
          <button type="button">Yearly Subscription | $66.99</button>
        </section>

        {/* other contents */}
        <section className="details-model-info">
          <div>
            <ModelInfo userDetail={userDetail} />
          </div>
        </section>
      </div>

  </div>
  <div className="footer-space">
    
  </div>
  <Footer />
  </>
  );
};

export default ModelProfile;
