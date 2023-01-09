import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageSvg, ShareSvg } from "../pages/Component/Svg";
import Footer from "../pages/Component/Footer";
import Header from "../pages/Component/Header";
import "./css/modeldetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Backtotop from "../pages/Component/Backtotop";
import ModelInfo from "./ModelInfo";
import axios from "axios";

function SingleModel() {
  const { productId } = useParams();
  const urlRef = useRef();
  const [data, setData] = useState(null);
  const [showAbout, setShowAbout] = useState(true);
  const [singleModel, setSingleModel] = useState([]);

  //fetching all user data from the database.
  useEffect(() => {
    axios
      .get("https://xfansbend.herokuapp.com/api/users/all")
      .then((response) => {
        setData(response.data);
        setSingleModel(response.data.find((prod) => prod._id === productId));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);
  // console.log(data);
  // console.log(singleModel.userName);
  const {
    // backgroundImage,
    city,
    country,
    createdAt,
    description,
    ethnicity,
    eyesColor,
    firstName,
    gender,
    height,
    // image,
    lastName,
    phoneNumber,
    sextualOrientation,
    updatedAt,
    weight,
    zipCode,
    _id,
    // displayName,
    // email,
    // color,
    // userName,
  } = singleModel;

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
    return description;
  };

  const shareProfileHandler = () => {
    urlRef.current.select();
    document.execCommand("copy");
    window.alert("Link has been copied to clipboard!");
  };

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
          <img
            // src={"data:image/jpeg;base64," + arrayBufferToBase64(backgroundImage.data.data)}
            alt={`${lastName} background`}
            className="bgimg"
          />
          <div className="profileimg">
            <img
              alt="Avatar"
              // src={singleModel.image}
              // src={
              //   "data:image/jpeg;base64," + arrayBufferToBase64(image.data.data)
              // }
              className="avatar"
            />
          </div>
        </div>
        <section className="details-section-one">
          <div className="details-name">
            <p className="mainname">{firstName + " " + lastName}</p>
            <p className="name2">@ {_id}</p>
            <p>Tel- {phoneNumber}</p>
          </div>

          <div className="details-head button">
            <button type="button" className="pri-button">
              <span className="svg-space">{MessageSvg}</span> Message
            </button>
            <button
              type="button"
              className="pri-button-2"
              onClick={shareProfileHandler}
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
        </section>

        <section className="details-spec">
          <div className="spec-1">
            <p>Gender: {gender}</p>
            <p>Weight: {weight}</p>
            <p>City: {city}</p>
            <p>Country: {country}</p>
          </div>
          <div className="spec-2">
            <p>Sexual orientation: {sextualOrientation}</p>
            <p>Eye Color: {eyesColor}</p>
            <p>Ethnicity {ethnicity}</p>
          </div>
          <div className="spec-3">
            <p>
              Height:
              {height}
            </p>
            <p>Zip-Code: {zipCode}</p>
            <p>Account Creation Date: {createdAt}</p>
            <p>Last Update By You: {updatedAt}</p>
          </div>
        </section>

        <section className="details-button">
          <button type="button">Monthly Subscription | $9.99</button>
          <button type="button">Yearly Subscription | $66.99</button>
        </section>

        {/* other contents */}
        <section className="details-model-info">
          <div>
            <ModelInfo singleModel={singleModel} />
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
