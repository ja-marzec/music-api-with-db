const express = require('express')
const router = express.Router();
const Music = require('../models/Music')

router.get('/', async (req,res) => {
    console.log("working!");
    const music = await Music.find();
    res.send(music)
})


module.exports = router;