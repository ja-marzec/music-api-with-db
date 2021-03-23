const express = require("express");
const router = express.Router();
const Post = require('../models/Post');


router.get('/', async (req,res) => {
    const savedPosts = await Post.find();
    res.send(savedPosts)
})

router.post("/", async (req,res) => {
 const post = new Post({
     title : req.body.title,
     desc : req.body.desc
 });
 console.log(post);

 try {
    const savedPosts = await post.save();
    res.json(savedPosts)
 }catch(err){
    console.log(err); 
 }

 post.save()
 .then(data => {res.send(data)})
 .catch(err => {res.json(err)})

})

router.get('/:id', async (req,res) => {
    console.log(req.params.id);
    const post = await Post.findById(req.params.id)
    res.json(post)
})

router.delete("/:id", async (req,res) => {
try {
    const post = await Post.remove({_id : req.params.id});
    Post.remove({_id: post}) 
}catch(err) {
    res.json        
}
})

router.patch('/:id', async (req,res) => {
    try {
        const post = await Post.updateOne({
            _id: req.params.id
        }, {
            $set: {title: req.body.title }
        })

        res.json(post)
         
    }catch(err) {
        console.log(err);
    }
})

module.exports = router;