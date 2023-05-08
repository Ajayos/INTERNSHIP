// filepath: server/db/index.js
// mongoose

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({path: '../.env'});

// connect to database and load models to app
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true});

// on connection
const db = mongoose.connection;
// on success
db.once('open', () => {
    console.log('connected to database'.green.bold);
});
// on error
db.on('error', console.error.bind(console, 'connection error:'));

// export db
module.exports = db;
