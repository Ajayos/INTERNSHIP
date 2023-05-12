// Importing necessary packages
const mongoose = require("mongoose");

// Defining the message schema
const messageSchema = mongoose.Schema(
  {
    // Reference to the User model for the sender
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // Message content
    content: { type: String, trim: true },
    // Reference to the Chat model for the chat
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    // Array of user references who have read the message
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt fields
);

// Creating a Message model using the message schema
const Message = mongoose.model("Message", messageSchema);

// Exporting the Message model
module.exports = Message;
