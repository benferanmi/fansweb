import React from 'react'
import axios from 'axios'

const DataFetch = () => {

    // const config = {
    //     headers:{
    //       header1: value1,
    //       header2: value2
    //     }
    //   };
    
      const url ="https://xfansbend.herokuapp.com/api/users";
      
    // Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        console.log("this is preloader show be loading already")
    }
}
// Calling that async function
getapi(url);
  return (
    <div></div>
  )
}

export default DataFetch