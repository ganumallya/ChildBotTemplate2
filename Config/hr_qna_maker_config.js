var cognitiveservices = require('botbuilder-cognitiveservices');
// require('dotenv-extended').load({path: '.env'});

// -------- Q/A Recognizer registrations --------------
var Consolidated_QnAMaker = {
    knowledgeBaseId: process.env.Hr_QNA_KBID || 'c16d8e20-e5eb-4dd6-96e0-7fae5f4f7d0b', 
    authKey: process.env.Hr_QNA_KEY || '4a63c6ac-dedc-4168-a7ab-95e17e8916ab',
    endpointHostName: process.env.QNA_HOST || 'https://tao-evaa.azurewebsites.net/qnamaker',
    top: 1};
module.exports = Consolidated_QnAMaker;
