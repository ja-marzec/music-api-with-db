const express = require('express');
const { rawListeners } = require('../models/Music');
const router = express.Router();
const Music = require('../models/Music')


router.post('/',  (req,res) => {
    try{
        const password = req.body.password;
        if(password === process.env.ADMIN_PASSWORD) {
            res.send("OK");
        } else {
            res.send({message: "NOT_OK"})
        }
    } catch(err) {
        res.send("WRONG PASSWORD", err);
    }
})
// router.post('/', async (req,res) => {
//     const data = new Music({
//         title: req.body.title,
//         author: req.body.author,
//         genre: req.body.genre,
//         url: req.body.url
//     });
//     try{
//         const savedPost  = await data.save();
//         res.json(savedPost)
//     } catch(err) {
//         res.json({message: err})
//     }
// })
module.exports = router;
