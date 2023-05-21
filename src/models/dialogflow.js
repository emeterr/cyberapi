const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();
// const CREDENTIALS = JSON.parse(process.env.CRED);
const fs = require('fs');
const rootdir = require('path').resolve('./');
const CREDENTIALS = JSON.parse(fs.readFileSync(`${rootdir}/cred.json`));
const PROJECID = CREDENTIALS.project_id;
const CONFIGURATION = {
  credentials: {
    private_key: CREDENTIALS['private_key'],
    client_email: CREDENTIALS['client_email'],
  },
};
const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

const detectIntent = async (languageCode, queryText, sessionId) => {
  let sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);
  // The text query request.
  let request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: queryText,
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  // const result = responses[0].queryResult;
  console.log(responses);

  return responses
};

module.exports = {detectIntent};