const mongoose = require('mongoose');

const MusicSchema = mongoose.Schema({
    title: {
       type: String,
       require: true
    },
    author: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    url :{ 
        type: String,
        require: true
 },
})

// mongoose.model (NAME, USE)
module.exports = mongoose.model('Music', MusicSchema)