const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const cyberRoute = require('./src/routes/cyberbully');

const { v4: uuidv4 } = require('uuid');
app.use('/ai', cyberRoute);


function Genera() {
  return uuidv4();
}

app.listen('3000', () => {
  console.log('EMETERR AI INITIALIZED...');
});
