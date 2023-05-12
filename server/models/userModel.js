// Importing necessary packages
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Defining the user schema
const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      required: true,
      default: "https://github.com/keerthana-bot.png",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt fields
);

// Defining a method to compare entered password with user's password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hashing the password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  // Generating a salt and hashing the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Creating a User model using the user schema
const User = mongoose.model("User", userSchema);

// Exporting the User model
module.exports = User;
