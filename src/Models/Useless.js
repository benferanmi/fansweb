import axios from "axios";
import React from "react";
import { useRef } from "react";

const Useless = () => {
  let userDetail = JSON.parse(localStorage.getItem("user"));
  const bgimg = userDetail.backgroundImage;
  const id = userDetail._id;
  const token = userDetail.token;

  const fileInput = useRef(null);

  const API_URL = "https://xfansbend.herokuapp.com/api/users/me";
  //getting the needed information about the user from the database.

  axios
    .get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleSubmit = (e) => {
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

  return (
    <div>
      <img
        src={"data:image/jpeg;base64," + arrayBufferToBase64(bgimg.data.data)}
        width="300"
        alt="this is the imageeee that back"
      />

      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileInput} multiple />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Useless;
