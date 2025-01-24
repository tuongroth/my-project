const express = require('express');
const router = express.Router();
const axios = require('axios'); // We will use axios to send HTTP requests

// @route POST /api/users/login
// @desc Login user via MongoDB Atlas API and return a token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Prepare data for MongoDB Atlas API request
    const requestData = {
      username: email,  // 'username' for MongoDB Atlas is the 'email'
      password: password
    };

    // Send POST request to MongoDB Atlas login API
    const response = await axios.post(
      'https://eu-west-2.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-zbmnuij/auth/providers/local-userpass/login',
      requestData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Check if the response contains an access token
    if (response.data && response.data.access_token) {
      // Respond with the token received from MongoDB Atlas
      return res.status(200).json({ token: response.data.access_token });
    } else {
      // If no access token is returned, return an error message
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
