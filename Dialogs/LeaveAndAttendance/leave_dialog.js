
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/LeaveIntentDialog', [
        function (session, args, next) {

            var bot_response = "Leave Intent";
            session.endDialog(bot_response);
        }
    ]).triggerAction({
        matches: 'LeaveIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};