
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/PrinterIntentDialog', [
        function (session, args, next) {
            console.log(args);
            if(args.intent.entities.length>0){
                if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('cartridge')){
                    session.send('Please share printer\'s physical location for which the issue persists.');
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('jam')){
                    session.send('Please share printer\'s physical location for which the issue persists.');
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('printer')){
                    builder.Prompts.choice(session,'Please choose the appropriate category.','1. Paper Jam|2. Cartridge Replacement|3. Printer Setup on personal machine|4. Printing issues|5. Others',{ listStyle:builder.ListStyle.button});
                }
                else{
                    session.send('I did not understand. Could you please rephraze.');
                }
            }
        },
        function(session,results){
            console.log(results);
            if(results.response.entity.toLowerCase().includes('cartridge')){
                session.send('Please share printer\'s physical location for which the issue persists.');
            }
            else if(results.response.entity.toLowerCase().includes('jam')){
                session.send('Please share printer\'s physical location for which the issue persists.');
            }
        }
    ]).triggerAction({
        matches: 'PrinterIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};