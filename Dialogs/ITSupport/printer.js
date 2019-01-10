
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/PrinterIntentDialog', [
        function (session, args, next) {
            var userID = session.message.address.user.id;
            console.log("USER ID IS:"+userID)
            console.log(args);
            console.log(session.message.text)
            var resp = '';
            session.privateConversationData.locations = '';
            if(args.intent.entities.length>0){
                var intent = args.intent;
                var title = builder.EntityRecognizer.findEntity(intent.entities, 'Location');
                var printer = builder.EntityRecognizer.findEntity(intent.entities, 'PrinterType');
                console.log("working,..........."+title);
                if(title){
                    if(title.entity.length>0){
                        console.log("printinggggggggggg........."+title.entity);
                        session.privateConversationData.locations = title.entity;
                        resp = "IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved."
                        session.endDialog(resp);
                    }
                }
                if(printer && printer.resolution.values.length > 0){
                    if(printer.resolution.values[0].toLowerCase().includes('cartridge') || printer.resolution.values[0].toLowerCase().includes('jam')){
                        resp = "Please share printer\'s physical location for which the issue persists."
                        builder.Prompts.text(session,resp);
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('setup') || printer.resolution.values[0].toLowerCase().includes('lan')){
                        resp = "IT support person will come to your desk in 20 minutes to resolve the issue. Thanks !!"
                        session.endDialog(resp)
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('printing')){
                        resp = "Please check for your network whether its connected or not?\n\n1. Network Connected\n2. Network not connected"
                        builder.Prompts.text(session,resp)
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('wifi')){
                        resp = "Please connect to LAN cable and try again."
                        session.endDialog(resp)
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('not')){
                        resp = "Please connect to the network and try again."
                        session.endDialog(resp)
                    }
                    else if(printer.resolution.values[0].toLowerCase().includes('connected')){
                        resp = "Are you connected to LAN or Wifi"
                        builder.Prompts.text(session,resp)
                    }
                    else{
                        resp = "Please choose the appropriate category.\n\n1. Paper Jam\n2. Cartridge Replacement\n3. Printer Setup on personal machine\n4. Printing issues"
                        builder.Prompts.text(session,resp);
                    }
                }
            }
            else{
                resp = "Please choose the appropriate category.\n\n1. Paper Jam\n2. Cartridge Replacement\n3. Printer Setup on personal machine\n4. Printing issues"
                builder.Prompts.text(session,resp);
            }
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, resp, 'PrinterIntent')
        },
        function(session,results){
            console.log(results);
            var resp ='';
            if(session.privateConversationData.locations.length>0){
                resp = "IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved."
                session.endDialog(resp);
            }
            else{
                var title = builder.EntityRecognizer.findEntity(results.response.entities, 'Location');
                //var printer = builder.EntityRecognizer.findEntity(intent.entities, 'PrinterType');
                if(title){
                    if(title.entity.length>0){
                        session.privateConversationData.locations = title.entity;
                    }
                }
                if(results.response.toLowerCase().includes('cartridge') || results.response.toLowerCase().includes('jam')){
                    resp = "Please share printer\'s physical location for which the issue persists."
                    builder.Prompts.text(session,resp);
                }
                else if(results.response.entity.toLowerCase().includes('location')){
                    resp = "IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved."
                    session.endDialog(resp);
                }
                else if(results.response.toLowerCase().includes('not')){
                    resp = "Please connect to the network and try again."
                    session.endDialog(resp)
                }
                else if(results.response.toLowerCase().includes('connected')){
                    resp = "Are you connected to LAN or Wifi"
                    builder.Prompts.text(session,resp)
                }
            }
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, resp, 'PrinterIntent')
        },
        function(session,results){
            console.log(results);
            var resp = '';
            if(session.privateConversationData.locations.length>0){
                resp = "IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved."
                session.endDialog(resp);
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
                    resp = "IT team will resolve the issue in next 30 minutes. Team will let you know once the issue is resolved."
                    session.endDialog(resp);
                }
                else if(results.response.toLowerCase().includes('lan')){
                    resp = "IT support person will come to your desk in 20 minutes to resolve the issue. Thanks !!"
                    session.endDialog(resp)
                }
                else if(results.response.toLowerCase().includes('wifi')){
                    resp = "Please connect to LAN cable and try again."
                    session.endDialog(resp)
                }
                else{
                    resp = "IT support person will come to your friend's/colleague's desk in 20 minutes to resolve the issue. Thanks !!"
                    session.endDialog(resp)
                }
            }
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, resp, 'PrinterIntent')
        }
    ]).triggerAction({
        matches: 'PrinterIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
