// Import the necessary dependencies
const mongoose = require("mongoose");
const colors = require("colors");

// Define a function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Use Mongoose to connect to the database with the URI provided in the environment variables
    const conn = await mongoose.connect('mongodb+srv://ajayos:ajayos@cluster0.ikpm1sn.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a message indicating that the connection was successful
    log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // Log an error message if the connection failed
    log(`Error: ${error.message}`.red.bold);
    // Exit the process with a non-zero status code
    //process.exit();
  }
};

const UserSchema = new mongoose.Schema({
    no: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true,
    }
});


const User = mongoose.model('User', UserSchema);

// Export the connectDB function
module.exports = { connectDB, User};
