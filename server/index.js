// import from node modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const nodelog = require("@ajayos/nodelog");
var cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

// impoer from local files
const connectDB = require("./db/db");
//const userRoutes = require("./routes/userRoutes");
//const chatRoutes = require("./routes/chatRoutes");
//const messageRoutes = require("./routes/messageRoutes");
//const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// setup app using express
const app = express();

// Default
app.use(cors());
app.use(express.json()); // to accept json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup dotenv
dotenv.config();

// setup db
connectDB();

// setup port
const PORT = process.env.PORT || 3001;

// setup routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// --------------------------deployment------------------------------
const __dirname1 = path.resolve();

//app.use(express.static(path.join(__dirname1, "/Public")));

//app.get("*", (req, res) =>
//  res.sendFile(path.resolve(__dirname1, "public", "index.html"))
//);
  
app.get("/", (req, res) => {
    res.send("API is running..");
  });

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// setup server
const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
