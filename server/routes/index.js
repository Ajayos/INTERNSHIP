const express = require("express");
const User = require("../models/userModel");
const generateToken = require("../db/generateToken");
const router = express.Router();  // creates a new Router instance

router.post("/api/user",async  function (req, res) {
    const { name, email, password, pic } = req.body;
  
    // Check if all fields are present
    if (!name || !email || !password) {
      res.status(400).json({message : "Please Enter all the Fields"});
    }
  
    // Check if a user with the same email already exists
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400).json({ message: "User already exists"});
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
      res.status(400).json({ message: "User not found"});
    }
});

router.post('/api/user/login', async (req, res) => {
  const { email, password,} = req.body;

  const user = await User.findOne({ email });
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
    res.status(401).json({ message :"Invalid Email or Password"});
  }

})
module.exports = router;  // exports the router for use in other files
