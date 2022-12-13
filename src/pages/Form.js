// import axios from "axios";
import React, { useState } from "react";
import "../css/form.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ModelForm = () => {
  const [user, setUser] = useState({
    description: " ",
    weight: "",
    height: "",
    gender: "",
    eyesColor: "",
    sextualOrientation: "",
    zipCode: "",
    phoneNumber: "",
    ethnicity: "",
    city: "",
    color: "",
  });
  const [addgender] = useState(["", "female", "male"]);
  const [addEthnicity] = useState([
    "",
    "American Indian",
    "Alaska Native",
    "Black",
    "Africa American",
    "Hispanic or Latino",
    "Native Hawaiian or Other Pacific Islander",
    "White",
  ]);

  //this is the state for the combined userdats for models

  const Add = addgender.map((Add) => Add);
  const AddEthnicity = addEthnicity.map((Add) => Add);

  const handleModelSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //handling gender select option.
  const handleGenderSubmit = (e) => {
    let newGender = addgender[e.target.value];
    let newEthnicity = addEthnicity[e.target.value];
    //pushing gender option to the main user array.
    setUser({ ...user, gender: newGender, ethnicity: newEthnicity });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL = "https://xfansbend.herokuapp.com/api/users";
    const fanRegister = async (updatedInfo) => {
      const response = await axios.post(API_URL, updatedInfo);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("res is true");
      }
      return response.data;
    };

    const detailsRequired =
      user.description && user.zipCode && user.phoneNumber;

    if (detailsRequired) {
      const previousInfo = JSON.parse(localStorage.getItem("modelDetails"));
      const updatedInfo = { ...user, ...previousInfo };
      fanRegister(updatedInfo);

      // navigate("/")
      localStorage.setItem("models", JSON.stringify(updatedInfo));
      console.log("details is true");
    } else if (!user.description) console.log("enter your description");
    else if (!user.zipCode) {
      console.log("please enter your zipcode to continue");
    } else if (!user.phoneNumber) {
      console.log("please enter your phone Number to proceed ");
    } else {
      console.log("kindly reload your webpage. Internet Error");
    }
  };

  return (
    <div className="form-mmv">
      <section className="model-form">
        <form>
          <label htmlFor="des">
            Enter Short description About yourself.
            <input
              className="fwh1"
              type="text"
              id="des"
              name="description"
              value={user.description}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="weight">
            weight
            <input
              className="fwh2"
              type="number"
              id="weight"
              name="weight"
              value={user.weight}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="height">
            Height
            <input
              className="fwh2"
              type="number"
              id="height"
              name="height"
              value={user.height}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="zip">
            Zip Code
            <input
              className="fwh2"
              type="number"
              id="zip"
              name="zipCode"
              value={user.zipCode}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="city">
            City
            <input
              className="fwh2"
              type="text"
              id="city"
              name="city"
              value={user.city}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="color">
            color
            <input
              className="fwh2"
              type="text"
              id="color"
              name="color"
              value={user.color}
              onChange={handleModelSubmit}
            />
          </label>
         
          <label htmlFor="gender">
            Gender
            <select
              onChange={(e) => handleGenderSubmit(e)}
              className="fwh2"
              id="gender"
            >
              {Add.map((address, key) => (
                <option value={key}>{address} </option>
              ))}
            </select>
          </label>
          <label htmlFor="Ethnicity">
            Ethnicity
            <select
              onChange={(e) => handleGenderSubmit(e)}
              className="fwh2"
              id="Ethnicity"
            >
              {AddEthnicity.map((address, key) => (
                <option value={key}>{address} </option>
              ))}
            </select>
          </label>
          <label htmlFor="sexore">
            Sextual Orientation
            <input
              className="fwh2"
              type="text"
              id="sexore"
              name="sextualOrientation"
              value={user.sextualOrientation}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="eye">
            Eyes Color
            <input
              className="fwh2"
              type="text"
              id="eye"
              name="eyesColor"
              value={user.eyesColor}
              onChange={handleModelSubmit}
            />
          </label>
          <label htmlFor="tel">
            Phone Number
            <input
              className="fwh1"
              type="tel"
              id="tel"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleModelSubmit}
            />
          </label>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ModelForm;
