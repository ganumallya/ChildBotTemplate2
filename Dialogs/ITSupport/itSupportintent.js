
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/ITIssuesDialog', [
        function (session, args, next) {
            var res = "I am here to help. Please type in your issue."
            session.endDialog(res)
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, res, 'ITIssuesIntent')
        }
    ]).triggerAction({
        matches: 'ITIssuesIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
