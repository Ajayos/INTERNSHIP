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
const picModel = require("./models/picModel");
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
const PORT = process.env.PORT || 3003;

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')


app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    var fs = require('fs');
    console.log(req.file.mimetype)
    fs.readFile('./public/' + req.file.filename, function (err, data) {
      if (err) return console.error(err);
      const addPic = new picModel({url: data, name: req.file.filename, mimetype: req.file.mimetype});
      addPic.save();
    });
    res.send(req.file);
  });
});
app.get('/view', async (req, res) => {
  try {
    const pic = await picModel.findById(req.query.id);
    if (!pic) {
      return res.sendStatus(404);
    }
    
    // Convert the image data to base64
    const base64Data = Buffer.from(pic.url.buffer).toString('base64');
    const imageUrl = `<img alt=${pic.name}  src="data:${pic.mimetype};base64,${base64Data}" />`;
    
    // Send the image URL as the response
    res.send(imageUrl);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.use(express.static('public'));
app.post('/pic', function (req, res) {
  const { pic, name } = req.body;
  console.log(pic)
  //const addPic = new picModel({pic, name});
 // addPic.save();
  res.json({
    status: "success",
   // data: addPic,
  });
});
app.use(express.static(path.join(__dirname, "/public")));


// --------------------------deployment------------------------------


// setup server
const server = app.listen(
  PORT,
  log(`Server running on PORT ${PORT}...`.yellow.bold)
);

//const io = require("socket.io")(server, {
//  pingTimeout: 60000,
//  cors: {
//    origin: "http://localhost:3000",
//  },
//});
//
//io.on("connection", (socket) => {
//  console.log("Connected to socket.io");
//  socket.on("setup", (userData) => {
//    socket.join(userData._id);
//    socket.emit("connected");
//  });
//
//  socket.on("join chat", (room) => {
//    socket.join(room);
//    console.log("User Joined Room: " + room);
//  });
//  socket.on("typing", (room) => socket.in(room).emit("typing"));
//  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
//
//  socket.on("new message", (newMessageRecieved) => {
//    var chat = newMessageRecieved.chat;
//
//    if (!chat.users) return console.log("chat.users not defined");
//
//    chat.users.forEach((user) => {
//      if (user._id == newMessageRecieved.sender._id) return;
//
//      socket.in(user._id).emit("message recieved", newMessageRecieved);
//    });
//  });
//
//  socket.off("setup", () => {
//    console.log("USER DISCONNECTED");
//    socket.leave(userData._id);
//  });
//});
//