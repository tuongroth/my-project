const axios = require("axios");

const MONGODB_REALM_API_URL = "https://eu-west-2.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-zbmnuij";

// @desc Login user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await axios.post(`${MONGODB_REALM_API_URL}/auth/providers/local-userpass/login`, {
      username,
      password,
    });

    const { access_token, refresh_token } = response.data;

    return res.status(200).json({
      message: "Login successful",
      accessToken: access_token,
      refreshToken: refresh_token,
    });
  } catch (error) {
    return res.status(error.response.status).json({
      message: error.response.data,
    });
  }
};

// @desc Register user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await axios.post(`${MONGODB_REALM_API_URL}/auth/providers/local-userpass/register`, {
      username,
      password,
    });

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(error.response.status).json({
      message: error.response.data,
    });
  }
};

module.exports = { loginUser, registerUser };
