const express = require('express')
const router = express.Router();
const Music = require('../models/Music')

router.get('/', async (req,res) => {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        const music = await Music.find();
        res.send(music)
    }catch(err) {
        console.log("dupa", err);
    }
    res.send("aloha")
})

module.exports = router;