// Import the necessary dependencies
const mongoose = require("mongoose");
const colors = require("colors");

// Define a function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Use Mongoose to connect to the database with the URI provided in the environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a message indicating that the connection was successful
    log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // Log an error message if the connection failed
    log(`Error: ${error.message}`.red.bold);
    // Exit the process with a non-zero status code
    process.exit();
  }
};

// Export the connectDB function
module.exports = connectDB;
