const bot_reply = require('../../bot_reply');
const {config} = require('../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/AttendanceIntentDialog', [
        function (session, args, next) {

            var bot_response = "Attendance Intent";
            session.endDialog(bot_response);
        
        }
    ]).triggerAction({
        matches: 'AttendanceIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};