const mongoose = require('mongoose');

const pic = new mongoose.Schema({
    url: {
        type: Buffer,
        required: true
        // unique: true
    },
    name: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('pic', pic);