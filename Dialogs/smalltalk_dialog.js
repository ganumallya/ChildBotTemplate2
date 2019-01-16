var builder = require('botbuilder');
const {config} = require('../Config/config');
const {smalltalk_qna_maker} = require('../Config/config');
var qnamakerservice = require('./QnaMaker')

console.log('------CONFIDENCE_THRESHOLD------');
console.log(config.CONFIDENCE_THRESHOLD);

module.exports = (bot) => {
    bot.dialog('/CasualTalks', [
        function (session, args, next) {
            console.log("Reach QNA Block for small talks")
            console.log(smalltalk_qna_maker);

            var query = session.message.text;
            qnamakerservice(smalltalk_qna_maker,query,(result)=>{
                session.endDialog(result);
                var id = session.message.address.user.id;
                require('../mongoLog')(id,query,result,'CasualTalks')
            });

        }
    ]).triggerAction({
        matches: 'CasualTalks',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
