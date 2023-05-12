// Importing necessary packages
const mongoose = require("mongoose");

// Defining the chat schema
const chatSchema = mongoose.Schema(
  {
    // Chat name
    chatName: { type: String, trim: true },
    // Boolean flag indicating if the chat is a group chat
    isGroupChat: { type: Boolean, default: false },
    // Array of user references for users in the chat
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // Reference to the latest message in the chat
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    // Reference to the user who is the group admin
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt fields
);

// Creating a Chat model using the chat schema
const Chat = mongoose.model("Chat", chatSchema);

// Exporting the Chat model
module.exports = Chat;
