// const {smalltalk_qna_maker} = require('../Config/config');
var request = require("request");
const {config} = require('../Config/config');
const botreply = require('../bot_reply');


module.exports = (qnamakerConfig,query,callback) => {
    var options = { method: 'POST',
    url: `${qnamakerConfig.endpointHostName}/knowledgebases/${qnamakerConfig.knowledgeBaseId}/generateAnswer`,
    headers: 
        { 'cache-control': 'no-cache',
            'Content-Type': 'application/json',
            Authorization: 'EndpointKey '+qnamakerConfig.authKey },
            body: { question: query },
            json: true };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        if(body.answers[0].score >= config.CONFIDENCE_THRESHOLD){
            // console.log(body.answers[0].answer);
            // console.log(body.answers[0].score)
            callback(body.answers[0].answer);
        }else{
            // console.log(body.answers[0].answer);
            // console.log(body.answers[0].score)
            callback(botreply.didntUnderstand);
        }
        
    });

};
