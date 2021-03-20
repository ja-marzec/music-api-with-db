const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
       type: String,
       require: true
    },
    desc: {
        type: String,
        require: true
    
    },
    date:{ 
    type: Date,
    default: Date.now

 },
})

// mongoose.model (NAME, WHAT TOUSE)
module.exports = mongoose.model('Post', PostSchema)