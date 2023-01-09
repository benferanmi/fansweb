import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  // faArrowCircleRight,
  // faArrowCircleLeft,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./css/model.css";
import axios from "axios";

const ModelReal = () => {
  const [data, setData] = useState(null);

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

  return (
    <div>
      {data ? (
        <div className="models">
          {data.map((users) => {
            return (
              <div className="model-box" key={users._id}>
                <Link to={`/model/${users._id}`}>
                  <img src={users.image} alt="" />
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
                <div className="gap"></div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ModelReal;
