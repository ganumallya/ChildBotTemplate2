var builder = require('botbuilder');
const {hr_qna_maker} = require('../../Config/config')
const {config} = require('../../Config/config');
var qnamakerservice = require('../QnaMaker')

module.exports = (bot) => {
    
    bot.dialog('/HROnboarding', [
        function (session, args, next) {
            console.log("Reach QNA Block")

            var query = session.message.text;
            qnamakerservice(hr_qna_maker,query,(result)=>{
                session.endDialog(result);
            });
            
        }
    ]).triggerAction({
        matches: 'HROnboarding',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};