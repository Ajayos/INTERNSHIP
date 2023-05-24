const mongoose = require('mongoose');

const pic = new mongoose.Schema({
    url: {
        type: String,
        required: true
        // unique: true
    },
    mimeType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('image', pic);