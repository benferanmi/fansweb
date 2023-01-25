import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  // faArrowCircleRight,
  // faArrowCircleLeft,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import blur from '../image/blur.PNG'
import './css/model.css'

const ModelReal = () => {
  const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [imageBuffer, setImageBuffer] = useState(null);

  useEffect(() => {
    axios
      .get("https://xfansbend.herokuapp.com/api/users/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  // console.log(data);

  // console.log(imageBuffer);

  return (
    <div>
      {data ? (
        <div className="models">
          {data.map((users) => {
            return (
              <div className="model-box" key={users._id}>
                <Link to={`/model/${users._id}`}>
                  {!users.image ? (
                    <img src={blur} alt={users.userName} />
                  ) : (
                    <img
                   src={
                     "data:image/jpeg;base64," +
                     arrayBufferToBase64(users.image.data.data)
                   }
                   className="background-image"
                   alt="this is the imageeee that back"
                 />
                  )}
                </Link>
                <p className="modelname">
                  <span>{users.firstName}</span>
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
                <div className="gap">
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div>loading data</div>
        </>
      )}
    </div>
  );
};

export default ModelReal;
