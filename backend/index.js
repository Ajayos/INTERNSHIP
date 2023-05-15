// import from node modules
const express = require("express");
const path = require("path");
const nodelog = require("@ajayos/nodelog");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB, User } = require("./model");
const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.get('/students/v1/students', async function(req, res) {
    const data = await User.find();
    res.json(data);
})
app.post('/students/v1/students', async function(req, res) {
    console.log(req.body)
    const { no, name, grade } = req.body;
    const isin = await User.find(no);
    if(isin) {
        res.json({message: 'user found'})
    } else {
        await User.create({name: name, no: no, grade: grade});
        res.json({message: 'ok'})
    }
    
})
app.put('/students/v1/students/:id', function(req, res) {
    let id = req.params.id;
    await studentmodel.findByIdAndUpdate(id,req.body);
    res.send("data updated")
})
app.delete('/students/v1/students/:id',async function(req, res) {
    const id = req.params.id;
    const out = await User.findByIdAndDelete(id);
    if(out) {
        res.json({message: 'Delete successful'})
    } else {
        res.json({message: 'Error '})
    }
})

const server = app.listen(8080,  log(`Server running on PORT 8080...`.yellow.bold));
