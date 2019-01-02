
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/PrinterIntentDialog', [
        function (session, args, next) {
            console.log(args);
            var responses;
            if(args.intent.entities.length>0){
                var intent = args.intent;
                var title = builder.EntityRecognizer.findEntity(intent.entities, 'Location');
                var printer = builder.EntityRecognizer.findEntity(intent.entities, 'PrinterType');
                console.log("working,..........."+title);
                session.privateConversationData.locations = '';
                if(title){
                    if(title.entity.length>0){
                        console.log("printinggggggggggg........."+title.entity);
                        session.privateConversationData.locations = title.entity;
                        session.send('IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved.');
                    }
                }
                if(printer && printer.resolution.values.length > 0){
                    if(printer.resolution.values[0].toLowerCase().includes('cartridge')){
                        session.send('Please share printer\'s physical location for which the issue persists.');
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('jam')){
                        session.send('Please share printer\'s physical location for which the issue persists.');
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('printer')){
                        builder.Prompts.choice(session,'Please choose the appropriate category.','1. Paper Jam|2. Cartridge Replacement|3. Printer Setup on personal machine|4. Printing issues|5. Others',{ listStyle:builder.ListStyle.button});
                    }
                    else{
                        session.send('I did not understand. Could you please rephraze.');
                    }
                }
            }
        },
        function(session,results){
            console.log(results);
            if(session.privateConversationData.locations.length>0){
                session.send('IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved.');
            }
            else{
                var title = builder.EntityRecognizer.findEntity(results.response.entities, 'Location');
                //var printer = builder.EntityRecognizer.findEntity(intent.entities, 'PrinterType');
                if(title){
                    if(title.entity.length>0){
                        session.privateConversationData.locations = title.entity;
                    }
                }
                if(results.response.entity.toLowerCase().includes('cartridge')){
                    session.send('Please share printer\'s physical location for which the issue persists.');
                }
                else if(results.response.entity.toLowerCase().includes('jam')){
                    session.send('Please share printer\'s physical location for which the issue persists.');
                }
                else if(results.response.entity.toLowerCase().includes('location')){
                    session.send('IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved.');
                }
            }
        },
        function(session,result){
            console.log(results);
            if(session.privateConversationData.locations.length>0){
                session.send('IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved.');
            }
            else{
                var title = builder.EntityRecognizer.findEntity(intent.entities, 'Location');
                //var printer = builder.EntityRecognizer.findEntity(intent.entities, 'PrinterType');
                if(title){
                    if(title.entity.length>0){
                        session.privateConversationData.locations = title.entity;
                    }
                }
                if(results.response.entity.toLowerCase().includes('location')){
                    session.endDialog('IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved.');
                }
            }
        }
    ]).triggerAction({
        matches: 'PrinterIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
