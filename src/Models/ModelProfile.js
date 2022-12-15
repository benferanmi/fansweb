import React, { useState, useRef } from "react";
import axios from "axios";

const ModelProfile = () => {

  //geting the user id and token from the localstorage
  let userDetail = JSON.parse(localStorage.getItem("user"));
  const id = userDetail._id;
  const token = userDetail.token;
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
    });

  };
  return (
    <div>

      <form onSubmit={handleImageUpload}>
        <input id="fileInput" type="file" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ModelProfile;
