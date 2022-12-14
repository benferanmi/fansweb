import React from 'react'
import { useParams } from 'react-router-dom';

const ModelProfile = () => {
    const axios = require('axios');

// Update the user's name to 'John Doe'
const updatedUserData = {
  profileImage: ''
};

// Make a PUT request to the /users/:id endpoint, where :id is the ID of the user you want to update
axios.put('/users/:id', updatedUserData)
  .then(response => {
    // Handle the success response from the server
  })
  .catch(error => {
    // Handle any error that occurred during the request
  });

  let { userId } = useParams();

  return (
    <div>
        {userId}
    </div>
  )
}

export default ModelProfile