const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const eateryRoute = require('./src/routes/chatbot')


app.use('/eatery', eateryRoute)

app.listen('3000', ()=>{
    console.log('EMETERR AI INITIALIZED...')
})