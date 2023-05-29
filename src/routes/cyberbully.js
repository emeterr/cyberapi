const { detectIntent } = require('../models/dialogflow.js');

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
router.post('/detect', async (req, res) => {
  try {
    const data = await detectIntent('en', req.body.word, uuidv4());
    let data2 = JSON.parse(data[0].queryResult.fulfillmentText)
    res.json(data2)
  } catch (err) {
    // console.log(err);
    res.json(err);
  }
});

module.exports = router;
