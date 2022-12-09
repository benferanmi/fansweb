import React, { useState } from 'react'
import {
    GallerySvg,
    LiveSvg,
    MechadiseSvg,
    PremiumSvg,
    VideoSvg,
  } from "../Component/Svg";

const ModelInfo = (singleModel) => {
    const [showVideoContent, setShowVideoContent] = useState(false)
    const [showImageContent, setShowImageContent] = useState(true)
    const [showLiveContent, setShowLiveContent] = useState(false)
    const [showMechadiseContent, setShowMechadiseContent] = useState(false)
    const [showPremiumContent, setShowPremiumContent] = useState(false)
  
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
        setShowVideoContent(!showVideoContent)
        setShowImageContent(false)
        setShowLiveContent(false)
        setShowMechadiseContent(false)
        setShowPremiumContent(false)
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
        setShowPremiumContent(!showPremiumContent)
        setShowImageContent(false)
        setShowLiveContent(false)
        setShowMechadiseContent(false)
        setShowVideoContent(false)
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
        setShowImageContent(!showImageContent)
        setShowLiveContent(false)
        setShowMechadiseContent(false)
        setShowVideoContent(false)
        setShowPremiumContent(false)
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
        setShowMechadiseContent(!showMechadiseContent)
        setShowImageContent(false)
        setShowLiveContent(false)
        setShowVideoContent(false)
        setShowPremiumContent(false)
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
        setShowLiveContent(!showLiveContent)
        setShowImageContent(false)
        setShowMechadiseContent(false)
        setShowVideoContent(false)
        setShowPremiumContent(false)
      };
    
      const UserImages = () => {
          return (
            <>
                image
            </>
          );
      };
    
      const UserVideo = () => {
        return (
          <>
          <div>
            vIDEOS ARE NOT YET AVAILABLE AT THE MOMENT.
          </div>
          </>
        )
      }
      const UserPremium = () => {
        return (
          <>
          <div>
            Premium Videos ARE NOT YET AVAILABLE AT THE MOMENT.
          </div>
          </>
        )
      }
      const UserLive = () => {
        return (
          <>
          <p> Live View is not available at the moment. {singleModel.liveCon}</p>
          </>
        )
      }
      const UserMechandise = () => {
        <>
        <p> Store Content Are Not available at the Moment{singleModel.storeCon}</p>
        </>
      }
    
    
  return (
    <>
    <div className='details-others'>
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
     

          <div className='mainhr-info'>
          {showImageContent && <UserImages />}
          {showLiveContent && < UserLive />}
          {showVideoContent && < UserVideo />}
          {showMechadiseContent && < UserMechandise />}
          {showPremiumContent && < UserPremium />}
          </div>
    </>
  )
}

export default ModelInfo