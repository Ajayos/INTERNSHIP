const express = require("express");
const http = require("http");
const app = express();
const nodelog = require("@ajayos/nodelog");
const server = http.createServer(app);
var cors = require('cors')
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

// Default 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3001;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hi", (req, res) => res.send("hey"));

// post request
app.post("/", (req, res) => res.send("Got a POST request"));
app.post("/login", async function (req, res) {
  const { email, password } = req.body;
  console.log(req.body);
  if (email && password) {
    res.json({ status: "success", message: "Login Success"});
    
  } else {res.status(403).json({ status: "error", message: "Login Failed" });}
  
});
server.listen(port, () =>
  log(`Server running  on port ${port}! http://localhost:3001`)
);
