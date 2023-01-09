import React, { useState,useRef } from "react";
import {
  GallerySvg,
  LiveSvg,
  MechadiseSvg,
  PremiumSvg,
  VideoSvg,
} from "../pages/Component/Svg";

const ModelInfo = (singleModel) => {
  const [showVideoContent, setShowVideoContent] = useState(false);
  const [showImageContent, setShowImageContent] = useState(true);
  const [showLiveContent, setShowLiveContent] = useState(false);
  const [showMechadiseContent, setShowMechadiseContent] = useState(false);
  const [showPremiumContent, setShowPremiumContent] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const [images, setImages] = useState([]);
  const fileInput = useRef(null);


  //getting user token from user details that i save in the local storage.
  let userDetail = JSON.parse(localStorage.getItem("user"));
  const token = userDetail.token;

  const [threeBorder, setThreeBorder] = useState({
    VideoB: "",
    PremiumB: "",
    ImagesB: "",
    MechadiseB: "",
    LiveB: "",
  });

  const showVideo = () => {
    let UpdatedValue = {
      VideoB: "threeborder",
      PremiumB: "",
      ImagesB: "",
      MechadiseB: "",
      LiveB: "",
    };
    setThreeBorder((threeBorder) => ({ ...threeBorder, ...UpdatedValue }));
    setShowVideoContent(!showVideoContent);
    setShowImageContent(false);
    setShowLiveContent(false);
    setShowMechadiseContent(false);
    setShowPremiumContent(false);
  };
  const showPremium = () => {
    let UpdatedValue = {
      PremiumB: "threeborder",
      VideoB: "",
      ImagesB: "",
      MechadiseB: "",
      LiveB: "",
    };
    setThreeBorder((threeBorder) => ({ ...threeBorder, ...UpdatedValue }));
    setShowPremiumContent(!showPremiumContent);
    setShowImageContent(false);
    setShowLiveContent(false);
    setShowMechadiseContent(false);
    setShowVideoContent(false);
  };
  const showImages = () => {
    let UpdatedValue = {
      ImagesB: "threeborder",
      VideoB: "",
      PremiumB: "",
      MechadiseB: "",
      LiveB: "",
    };
    setThreeBorder((threeBorder) => ({ ...threeBorder, ...UpdatedValue }));
    setShowImageContent(!showImageContent);
    setShowLiveContent(false);
    setShowMechadiseContent(false);
    setShowVideoContent(false);
    setShowPremiumContent(false);
  };
  const showMachandise = () => {
    let UpdatedValue = {
      MechadiseB: "threeborder",
      VideoB: "",
      PremiumB: "",
      ImagesB: "",
      LiveB: "",
    };
    setThreeBorder((threeBorder) => ({ ...threeBorder, ...UpdatedValue }));
    setShowMechadiseContent(!showMechadiseContent);
    setShowImageContent(false);
    setShowLiveContent(false);
    setShowVideoContent(false);
    setShowPremiumContent(false);
  };
  const showLive = () => {
    let UpdatedValue = {
      LiveB: "threeborder",
      VideoB: "",
      PremiumB: "",
      ImagesB: "",
      MechadiseB: "",
    };
    setThreeBorder((threeBorder) => ({ ...threeBorder, ...UpdatedValue }));
    setShowLiveContent(!showLiveContent);
    setShowImageContent(false);
    setShowMechadiseContent(false);
    setShowVideoContent(false);
    setShowPremiumContent(false);
  };

  //submit for single image upload. 

  //image input for multiple files upload.
  const handleImageSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
    // ...
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }
    const API_URL = "https://xfansbend.herokuapp.com/api/posts";

    // Send the form data to the server using an HTTP POST request
    fetch(API_URL, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // handle the result
      });
  };

  const UserImages = () => {
    return (
      <>
         <form onSubmit={handleImageSubmit}>
        <input type="file" ref={fileInput} multiple />
        <button type="submit">Submit</button>
      </form>
      </>
    );
  };

  const UserVideo = () => {
    return (
      <>
        <div>vIDEOS ARE NOT YET AVAILABLE AT THE MOMENT.</div>
      </>
    );
  };
  const UserPremium = () => {
    return (
      <>
        <div>Premium Videos ARE NOT YET AVAILABLE AT THE MOMENT.</div>
      </>
    );
  };
  const UserLive = () => {
    return (
      <>
        <p> Live View is not available at the moment.</p>
      </>
    );
  };
  const UserMechandise = () => {
    <>
      <p> Store Content Are Not available at the Moment</p>
    </>;
  };

  return (
    <>
      <div className="details-others">
        <span onClick={showVideo} className={threeBorder.VideoB}>
          {VideoSvg}
        </span>
        <span onClick={showPremium} className={threeBorder.PremiumB}>
          {PremiumSvg}
        </span>
        <span onClick={showImages} className={threeBorder.ImagesB}>
          {GallerySvg}
        </span>
        <span onClick={showMachandise} className={threeBorder.MechadiseB}>
          {MechadiseSvg}
        </span>
        <span onClick={showLive} className={threeBorder.LiveB}>
          {LiveSvg}
        </span>
      </div>
      <hr className="details-hr" />

      <div className="mainhr-info">
        {showImageContent && <UserImages />}
        {showLiveContent && <UserLive />}
        {showVideoContent && <UserVideo />}
        {showMechadiseContent && <UserMechandise />}
        {showPremiumContent && <UserPremium />}
      </div>
    </>
  );
};

export default ModelInfo;
