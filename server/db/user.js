// filepath: server/db/models/user.js


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        trim: true,
        unique: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    age: {
        type: Number,
        required: [true, 'Please add an age'],
        trim: true,
        maxlength: [3, 'Age cannot be more than 3 characters']
    }
});


// export model
const User = mongoose.model('User', UserSchema);
module.exports = User;
