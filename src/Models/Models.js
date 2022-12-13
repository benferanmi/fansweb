import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  // faArrowCircleRight,
  // faArrowCircleLeft,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../data";
import './model.css'

const Models = () => {

  const [userData, setUserData] = useState(data)
  return (
    <>
    <div className="header-space">
      
    </div>
    <div className="models">
      {userData.map((users) => {
        return (
          <div className="model-box" key={users.id}>
             <Link to={`/models/${users.id}`}>
             <img src={users.image} alt="" />
             </Link>
            <p className="modelname">
              <span>{users.name}</span>
              <i>{users.verified}</i>
            </p>
            <i className="miconone">
              {" "}
              <FontAwesomeIcon icon={faCircle} color={users.color} />
            </i>

            <div className="userdetails">
              <div className="detailsone ">
                <p>{users.likenumber}</p>
                <i>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </i>
              </div>
              <div className="detailsone ">
                <p>{users.usernumber}</p>
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
              </div>
            </div>
            <div className="gap"></div>
          </div>
        );
      })}
      </div>
      <div className="footer-space">
        
      </div>
    </>
  );
};

export default Models;
