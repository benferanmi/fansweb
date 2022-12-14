import React, { useState } from "react";
import axios from "axios";

const ModelProfile = () => {
  // Update the user's name to 'John Doe'

  const [updatedUserData, setUpdatedUserData] = useState({ backgroundProfileImage: "" });

  let userDetail = JSON.parse(localStorage.getItem("user"))
  const id = userDetail._id;
  const token = userDetail.token 

  console.log(token)
  console.log(updatedUserData)

  const API_URL = `https://xfansbend.herokuapp.com/api/users/updateBackgroundProfileImage/:${id}`;

  const fanRegister = async () => {
    const response = await axios.put(API_URL, updatedUserData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response)
    if (response.data) {
      console.log("user updated is true");
    } else {
      console.log("sign up failed");
    }
    return response.data;
  };

  const handleValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fanRegister();

    console.log("am clicked");
  };
  return (
    <div>
      this is user
      <input
        type="file"
        name="backgroundProfileImage"
        value={updatedUserData.profileImage}
        onChange={handleValue}
        accept="image/png, image/jpeg"
      />
      <button type="button" onClick={handleSubmit}>
        update background image
      </button>
    </div>
  );
};

export default ModelProfile;
