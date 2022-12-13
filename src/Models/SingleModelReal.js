import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MessageSvg,
  ShareSvg,
} from "../Component/Svg";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "./modeldetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Backtotop from "../Component/Backtotop";
import ModelInfo from "./ModelInfo";

function SingleModel() {
  const { productId } = useParams();

  const data = JSON.parse(localStorage.getItem("FetchedModelData"))
//   const [userData, setUserData] = useState(data);
  const [showAbout, setShowAbout] = useState(true);
  console.log(data)
  const singleModel = data.find((prod) => prod._id === productId);


  const AboutShowhandler = () => {
    setShowAbout(!showAbout);
  };

  const AboutContent = () => {
    return singleModel.description;
  };


  return (
    <>
      <Header />
      <div className="header-space"></div>
      <div className="modeldetails">
        <div className="detailshead">
          <img
            src={singleModel.backgroundImage}
            alt={`${singleModel.name} background`}
            className="bgimg"
          />
          <div className="profileimg">
            <img alt="Avatar" src={singleModel.image} className="avatar" />
          </div>
        </div>
        <section className="details-section-one">
          <div className="details-name">
            <p className="mainname">
              {singleModel.name} {singleModel.verified}
            </p>
            <p className="name2">@ {singleModel.id}</p>
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
            <p>Gender: {singleModel.gender}</p>
            <p>Weight: {singleModel.weight}</p>
          </div>
          <div className="spec-2">
            <p>Sexual orientation: {singleModel.sextualOrientation}</p>
            <p>Eye Color: {singleModel.eyesColor}</p>
          </div>
          <div className="spec-3">
            <p>Height: {singleModel.height}</p>
            <p>Zip-Code: {singleModel.zipCode}</p>
          </div>
        </section>

        <section className="details-button">
          <button type="button">Monthly Subscription | $9.99</button>
          <button type="button">Yearly Subscription | $66.99</button>
        </section>

        {/* other contents */}
        <section className="details-model-info">
          <div >
            <ModelInfo singleModel={singleModel}/>
          </div>
        </section>
      </div>
      <div className="footer-space"></div>
      <Backtotop />
      <Footer />
    </>
  );
}

export default SingleModel;
