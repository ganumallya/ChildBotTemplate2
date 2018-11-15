var builder = require('botbuilder');
const {config} = require('../Config/config');


console.log('------CONFIDENCE_THRESHOLD------');
console.log(config.CONFIDENCE_THRESHOLD);

module.exports = (bot) => {
    
    bot.dialog('/qna', [
        function (session, args, next) {
            console.log("Reach QNA Block")

            //Getting response from QNA MAKER
            var answerEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'answer');
            var bot_response = answerEntity.entity;
           
            //Sending the response
            session.endDialog(bot_response);
            
        }
    ]).triggerAction({
        matches: 'qna',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};