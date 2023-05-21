const { detectIntent } = require('../models/dialogflow.js');

const express = require('express');
const router = express.Router();

router.get('/ai', async (req, res)=>{
    try{
     const data = await  detectIntent('en', req.query.word, req.query.id)
     console.log(data)
     res.json(data)
    }catch(err){
        console.log(err)
        res.json(err)
    }
})



module.exports = router;
