var cognitiveservices = require('botbuilder-cognitiveservices');
// require('dotenv-extended').load({path: '.env'});

// -------- Q/A Recognizer registrations --------------
var Consolidated_QnAMaker = {
    knowledgeBaseId: process.env.St_QNA_KBID || '0abcfd58-597b-4bd7-8bf6-78c077bd7527', 
    authKey: process.env.St_QNA_KEY || '57ebac01-df7c-44d7-8b6e-ca81fadc6165',
    endpointHostName: process.env.QNA_HOST || 'https://tao-evaa.azurewebsites.net/qnamaker',
    top: 1};

module.exports = Consolidated_QnAMaker;
