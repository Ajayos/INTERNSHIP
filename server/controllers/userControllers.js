// Import required modules
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../db/generateToken");

/**
 * @desc Get or Search all users
 * @route GET /api/user?search=
 * @access Public
 */
const allUsers = asyncHandler(async (req, res) => {
  // Create a keyword object with $or operator to search name and email fields
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  // Find all users with the given keyword and exclude the current user
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

  // Send the users in response
  res.send(users);
});

/**
 * @desc Register new user
 * @route POST /api/user/
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  // Extract user data from the request body
  const { name, email, password, pic } = req.body;

  // Check if all fields are present
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  // Check if a user with the same email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create a new user with the given data
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  // If the user is successfully created, send the user details and token in response
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    // If user not found, throw an error
    res.status(400);
    throw new Error("User not found");
  }
});

/**
 * @desc Auth the user
 * @route POST /api/users/login
 * @access Public
 */
const authUser = asyncHandler(async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  // Find the user with the given email
  const user = await User.findOne({ email });

  // If user exists and password matches, send the user details and token in response
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    // If email or password is invalid, throw an error
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// Export all functions as an object
module.exports = { allUsers, registerUser, authUser };
