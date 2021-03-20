const express = require('express');
const { rawListeners } = require('../models/Music');
const router = express.Router();
const Music = require('../models/Music')


router.get('/', async (req,res) => {
    const music = await Music.find();
    res.send(music)
})

router.post('/', async (req,res) => {
    const data = new Music({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genrem,
        url: req.body.url
    });
    try{
        const savedPost  = await  data.save();
        req.json(savedPost)

    }catch(err) {
        console.log(err);
    }
})

router.delete('/', async(req,res) => {
    // will take title;
    const deleteName = (req.body);
})

module.exports = router;
