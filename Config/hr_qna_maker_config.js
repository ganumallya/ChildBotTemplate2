var cognitiveservices = require('botbuilder-cognitiveservices');
// require('dotenv-extended').load({path: '.env'});

// -------- Q/A Recognizer registrations --------------
var Consolidated_QnAMaker = {
    knowledgeBaseId: process.env.Hr_QNA_KBID || '91292817-a309-44be-9087-f54d6b232df5', 
    authKey: process.env.Hr_QNA_KEY || '57ebac01-df7c-44d7-8b6e-ca81fadc6165',
    endpointHostName: process.env.QNA_HOST || 'https://tao-evaa.azurewebsites.net/qnamaker',
    top: 1};
module.exports = Consolidated_QnAMaker;
