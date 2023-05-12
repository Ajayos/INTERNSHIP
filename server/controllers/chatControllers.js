// Import necessary packages and models
const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

/**
 * Access or create a chat between two users.
 * @param {Object} req - The request object containing user ID in the request body.
 * @param {Object} res - The response object to send the chat data.
 * @returns {Object} - The chat object with users and latest message.
 */
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  // If user ID is not provided in the request body, send a 400 status code
  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  // Check if a chat between the two users already exists
  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  // If a chat between the users exists, return the chat data
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  }
  // If a chat between the users does not exist, create a new chat and return the chat data
  else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});


const fetchChats = asyncHandler(async (req, res) => {
  try {
    // Find all chats where the current user is a member
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      // Populate the "users" field with user data excluding password
      .populate("users", "-password")
      // Populate the "groupAdmin" field with user data excluding password
      .populate("groupAdmin", "-password")
      // Populate the "latestMessage" field with message data
      .populate("latestMessage")
      // Sort the results in descending order by "updatedAt" field
      .sort({ updatedAt: -1 })
      // Once the results are obtained, populate the "latestMessage.sender" field with user data excluding password
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        // Send the results as a response
        res.status(200).send(results);
      });
  } catch (error) {
    // If there's an error, send an error response
    res.status(400);
    throw new Error(error.message);
  }
});

// Handler function for creating a group chat
const createGroupChat = asyncHandler(async (req, res) => {
  // Validate the request body for required fields
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please fill all the fields" });
  }

  // Parse the list of users from the request body
  var users = JSON.parse(req.body.users);

  // Check that there are more than 2 users to form a group chat
  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  // Add the current user to the list of users
  users.push(req.user);

  try {
    // Create the group chat and store it in the database
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    // Retrieve the newly created group chat from the database and populate relevant fields
    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    // Return the full group chat object as JSON response
    res.status(200).json(fullGroupChat);
  } catch (error) {
    // Handle errors if any occur
    res.status(400);
    throw new Error(error.message);
  }
});

const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  // Find the chat by ID and update its chatName property with the new name
  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName: chatName,
    },
    {
      new: true,
    }
  )
    // Populate the users and groupAdmin fields of the updated chat object
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  // If the chat is not found, respond with a 404 status code and an error message
  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    // Otherwise, respond with the updated chat object as a JSON response
    res.json(updatedChat);
  }
});

const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin
  // The following code is missing

  // Try to add the user to the group chat
  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  // Check if the chat was found
  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
});

// This function removes a user from a group chat
const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // Check if the requester is admin

  // Find the chat with the specified ID, remove the user from the users array and return the updated chat
  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  // If chat not found, throw an error
  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    // If the user was removed successfully, send the updated chat object
    res.json(removed);
  }
});


module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
};
