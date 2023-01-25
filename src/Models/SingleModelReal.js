import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { MessageSvg, ShareSvg } from "../pages/Component/Svg";

import "./css/modeldetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Backtotop from "../pages/Component/Backtotop";
import ModelInfo from "./ModelInfo";
import blur from '../image/blur.PNG'
import blurBg from "../image/blurbg.png"
import axios from "axios";
import Header from '../pages/Component/Header.js'
import Footer from '../pages/Component/Footer.js'


function SingleModel() {
  const [data, setData] = useState(null)
 const [singleModel, setSingleModel] = useState()
  const { productId } = useParams();
  const urlRef = useRef();
  // const data = JSON.parse(localStorage.getItem("FetchedModelData"));
  const [showAbout, setShowAbout] = useState(true);

  useEffect(() => {
    axios
      .get("https://xfansbend.herokuapp.com/api/users/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
      if (data ) {
      const singleModel = data.find((prod) => prod._id === productId);
      if (singleModel) {
      setSingleModel(singleModel)
      }
      }
  // console.log(singleModel)

  } );

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };



  const AboutShowhandler = () => {
    setShowAbout(!showAbout);
  };

  const AboutContent = () => {
    return singleModel.description;
  };

  const shareProfileHandler = () => {
    urlRef.current.select();
    document.execCommand("copy");
    window.alert("Link has been copied to clipboard!");
  };

  if (!singleModel) {
    return <div>Loading.....</div>
  }

  return (
    <>
      <Header />
      <div className="header-space">
        {" "}
        <input
          type="text"
          ref={urlRef}
          value={window.location.href}
          className="hidden"
        />
      </div>
      <div className="modeldetails">
        <div className="detailshead">
        {!singleModel.backgroundImage ? (
                    <img 
                    src={blurBg} 
                    alt={singleModel.userName} 
                    className="bgimg" 
                    />
                  ) : (
                    <img
                   src={
                     "data:image/jpeg;base64," +
                     arrayBufferToBase64(singleModel.backgroundImage.data.data)
                   }
                   className="bgimg"
                   alt={`${singleModel.userName} background.`}
                 />
                  )}

          <div className="profileimg">
          {!singleModel.image ? (
                    <img 
                    src={blur} 
                    alt={singleModel.userName} 
                    className="avatar"/>
                  ) : (
                    <img
                   src={
                     "data:image/jpeg;base64," +
                     arrayBufferToBase64(singleModel.image.data.data)
                   }
                   className="avatar"
                   alt={singleModel.userName + "profile img"}
                 />
                  )}
          </div>
        </div>
        <section className="details-section-one">
          <div className="details-name">
            <p className="mainname">
              {singleModel.displayName} {singleModel.verified}
            </p>
            <p className="name2">@ {singleModel._id}</p>
          </div>

          <div className="details-head button">
            <button type="button" className="pri-button">
              <span className="svg-space">{MessageSvg}</span> Message
            </button>
            <button type="button" className="pri-button-2" onClick={shareProfileHandler}>
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
          {/* <div> */}
            {/* <ModelInfo singleModel={singleModel} />
             */}

             {/* <p>This User does Not have Any Uploaded Images Yet....</p> */}
          {/* </div> */}
        </section>
      </div>
      <div className="footer-space"></div>
      <Backtotop />
      <Footer />
    </>
  );
}

export default SingleModel;
