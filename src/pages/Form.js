// import axios from "axios";
import React, { useState } from "react";
import "../css/form.css";

const ModelForm = () => {
  const [user, setUser] = useState({
    discription: " ",
    weight: "",
    height: "",
    gender: "",
    eyesColor: "",
    sextualOrientation: "",
    zipCode: "",
    phoneNumber: "",
    ethnicity: "",
    city: '',
  });
  const [addgender] = useState(["", "female", "male"])
  const [addEthnicity] = useState(["", "American Indian", "Alaska Native", "Black", "Africa American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"])

  //this is the state for the combined userdats for models
  
  const Add = addgender.map(Add => Add)
  const AddEthnicity = addEthnicity.map(Add => Add)

  const handleModelSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

    //handling gender select option. 
  const handleGenderSubmit = (e) => {
    let newGender = addgender[e.target.value]
    let newEthnicity = addEthnicity[e.target.value]
    //pushing gender option to the main user array.
    setUser({...user, gender: newGender, ethnicity: newEthnicity})
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const detailsRequired = user.discription && user.zipCode && user.phoneNumber

    if (detailsRequired) {
        const previousInfo = JSON.parse(localStorage.getItem('modelDetails'))
        const updatedInfo = {...user, ...previousInfo}

        localStorage.setItem('models', JSON.stringify(updatedInfo))
        console.log('details is true')
    }
    else if (!user.discription) (
        console.log("enter your discription")
    ) 
    else if (!user.zipCode) {
        console.log("please enter your zipcode to continue")
    }
    else if (!user.phoneNumber) {
        console.log("please enter your phone Number to proceed ")
    } 
    else {
        console.log('kindly reload your webpage. Internet Error')
    }
  }


  return (
    <div className="form-mmv">
      <section className="model-form">
        <form>
          <label htmlFor="des">
            Enter Short discription About yourself.
            <input
            className="fwh1"
              type="text"
              id="des"
              name="discription"
              value={user.discription}
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
          <label htmlFor="gender">
            Gender
            <select onChange={e => handleGenderSubmit(e)} className="fwh2" id="gender">
                {
                    Add.map((address, key) => <option value={key} >{address} </option>)
                }
            </select>
          </label>
          <label htmlFor="Ethnicity">
          Ethnicity
            <select onChange={e => handleGenderSubmit(e)} className="fwh2" id="Ethnicity">
                {
                    AddEthnicity.map((address, key) => <option value={key} >{address} </option>)
                }
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

          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ModelForm;
