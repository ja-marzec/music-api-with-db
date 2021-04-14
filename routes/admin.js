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

module.exports = router;
