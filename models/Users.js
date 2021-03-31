const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
       type: String,
       require: true
    },
    password: {
        type: String,
        require: true
    },
})

// mongoose.model (NAME, USE)
module.exports = mongoose.model('Users', UserSchema)