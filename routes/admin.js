const express = require('express');
const { rawListeners } = require('../models/Music');
const router = express.Router();
const Music = require('../models/Music')


router.get('/', async (req,res) => {
    try{
        const music = await Music.find();
        res.send(music)
    
    } catch(err) {
        console.log(err);
    }
})

router.post('/', async (req,res) => {
    const data = new Music({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genrem,
        url: req.body.url
    });
    try{
        const savedPost  = await data.save();
        res.json(savedPost)
    } catch(err) {
        res.json({message: err})
    }

    
})

router.delete("/", async (req,res) => {
    try {
        const musicId = await Music.remove({_id : req.body.id});
        Post.remove({_id : musicId}) 
        res.json("deltedItem:")
        res.send("deltedItem:")

    }catch(err) {
        res.json(err)        
    }
    })

module.exports = router;
