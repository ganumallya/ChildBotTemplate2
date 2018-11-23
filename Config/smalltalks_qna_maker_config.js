var cognitiveservices = require('botbuilder-cognitiveservices');
// require('dotenv-extended').load({path: '.env'});

// -------- Q/A Recognizer registrations --------------
var Consolidated_QnAMaker = {
    knowledgeBaseId: process.env.St_QNA_KBID || '4deeaef2-80be-414d-9186-9a9820646801', 
    authKey: process.env.St_QNA_KEY || '4a63c6ac-dedc-4168-a7ab-95e17e8916ab',
    endpointHostName: process.env.QNA_HOST || 'https://tao-evaa.azurewebsites.net/qnamaker',
    top: 1};

module.exports = Consolidated_QnAMaker;