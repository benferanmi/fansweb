import React, { useState } from 'react'
import Footer from '../Component/Footer';
import "../Models/modeldetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Header from '../Component/Header';
import {
  MessageSvg,
  ShareSvg,
} from "../Component/Svg";
import ModelInfo from '../Models/ModelInfo';
import Backtotop from '../Component/Backtotop';
import { fileData } from '../fileData';


const ProfilePage = () => {
  //getting all details of the user.
  const models = localStorage.getItem('models')    

  const [previousDetails, setPreviousDetails] = useState(JSON.parse(models))
  const [showAbout, setShowAbout] = useState(true);
    
  console.log(previousDetails)

// showing about content handler and components
    const AboutShowhandler = () => {
    setShowAbout(!showAbout);
  };
  const AboutContent = () => {
    return previousDetails.discription;
  };


  return (
    <div>
       <>
      <Header />
      <div className="header-space"></div>
      <div className="modeldetails">
        <div className="detailshead">
          <img
            src={previousDetails.backgroundImage}
            alt={`${previousDetails.name} background`}
            className="bgimg"
          />
          <div className="profileimg">
            <img alt="Avatar" src={previousDetails.image} className="avatar" />
          </div>
        </div>
        <section className="details-section-one">
          <div className="details-name">
            <p className="mainname">
              {previousDetails.name} {previousDetails.verified}
            </p>
            <p className="name2">@ {previousDetails.id}</p>
          </div>

          <div className="details-head button">
            <button type="button" className="pri-button">
              <span className="svg-space">{MessageSvg}</span> Message
            </button>
            <button type="button" className="pri-button-2">
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
        </section>

        <section className="details-spec">
          <div className="spec-1">
            <p>Gender: {previousDetails.gender}</p>
            <p>Weight: {previousDetails.weight}</p>
          </div>
          <div className="spec-2">
            <p>Sexual orientation: {previousDetails.sextualOrientation}</p>
            <p>Eye Color: {previousDetails.eyesColor}</p>
          </div>
          <div className="spec-3">
            <p>Height: {previousDetails.height}</p>
            <p>Zip-Code: {previousDetails.zipCode}</p>
          </div>
        </section>

        <section className="details-button">
          <button type="button">Monthly Subscription | $9.99</button>
          <button type="button">Yearly Subscription | $66.99</button>
        </section>

        {/* other contents */}
        <section className="details-model-info">
          <div >
            <ModelInfo previousDetails={previousDetails}/>
          </div>
        </section>
      </div>
      <div className="footer-space"></div>
      <Backtotop />
      <Footer />
    </>
    </div>
  )
}

export default ProfilePage