const { detectIntent } = require('../models/dialogflow.js');

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
router.post('/detect', async (req, res) => {
  try {
    const data = await detectIntent('en', req.body.word, uuidv4());
    console.log(data)
    if (data[0].queryResult.fulfillmentMessages[1]?.payload) {
      let fields = data[0].queryResult.fulfillmentMessages[1].payload.fields;
      res.json({
        msg: fields.msg.stringValue,
        isCyber: fields.msg.stringValue,
        name: fields.msg.stringValue,
      });
    } else if (data[0].queryResult.fulfillmentMessages[0]?.payload) {
        let fields = data[0].queryResult.fulfillmentMessages[0].payload.fields;
      res.json({
        msg: fields.msg.stringValue,
        isCyber: fields.msg.stringValue,
        name: fields.msg.stringValue,
      });
    } else {
      res.json({
        isCyber: false,
        msg: 'Has no cyberbullying',
        name: 'none',
      });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
