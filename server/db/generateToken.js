const jwt = require("jsonwebtoken");

/**
 * Generate a JSON Web Token (JWT) using the provided user id and secret key
 * @param {string} id - User id
 * @returns {string} - JSON Web Token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
