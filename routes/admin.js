const express = require('express');
const { rawListeners } = require('../models/Music');
const router = express.Router();
const Music = require('../models/Music')

router.post('/',  (req,res) => {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        const password = req.body.password;
        console.log(password);
        if(password === process.env.ADMIN_PASSWORD) {
            res.send("OK")
        } else {
            res.send({message: "NOT_OK"})
        }
    } catch(err) {
        res.send("WRONG PASSWORD", err);
    }
})

module.exports = router;
