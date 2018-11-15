const bot_reply = require('../../bot_reply');
const logger = require('../../logger');

module.exports = (bot) => {
    
    bot.dialog('/casualtalks_bye', [
        function (session, args, next) {

            var bot_response = "Attendance Intent";
            //logger.info({session, args, bot_response});
            session.endDialog(bot_response);
        
        }
    ]).triggerAction({
        matches: 'AttendanceIntent',
        intentThreshold:0.4
    });
};