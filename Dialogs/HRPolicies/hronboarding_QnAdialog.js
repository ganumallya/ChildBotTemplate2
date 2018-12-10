var builder = require('botbuilder');
const {hr_qna_maker} = require('../../Config/config')
const {config} = require('../../Config/config');
var qnamakerservice = require('../QnaMaker')

module.exports = (bot) => {
    
    bot.dialog('/HROnboarding', [
        function (session, args, next) {
            console.log("Reach QNA Block for HROnboarding Query")

            var query = session.message.text;
            console.log(query+' hello');
            qnamakerservice(hr_qna_maker,query,(result)=>{
                console.log("Inside QnA Block");
                session.endDialog(result);

            });
            
        }
    ]).triggerAction({
        matches: 'HROnboarding',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};