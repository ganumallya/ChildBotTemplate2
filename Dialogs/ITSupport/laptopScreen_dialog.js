
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/LaptopScreenIntentDialog', [
        function (session, args, next) {
            var res = "Please help with a little information about the issue. From when are you facing this issue ?"
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, res, 'LaptopScreenIntent')
            builder.Prompts.time(session,res); 
        },
        function(session,results){
            var timeD = builder.EntityRecognizer.resolveTime([results.response]); 
            console.log(timeD);
            var res = "When are you getting this issue. Is it when you touch the screen or is it screen flickering ?"
            builder.Prompts.choice(session,res,"By touch|Flickering",{ listStyle:builder.ListStyle.button});
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, res, 'LaptopScreenIntent')
        },
        function(session,results){
            console.log(results);
            var res = ''
            if(results.response.entity.toLowerCase().includes('touch')){
                res = "There must be some problem with the strip cable."+"\nAre you raising this request for yourself or on behalf of your colleague ?"
                //session.send(res);
                builder.Prompts.choice(session,res,"For Me|For Colleague",{ listStyle:builder.ListStyle.button});
            }
            else if(results.response.entity.toLowerCase().includes('flickering')){
                res = "There must be some problem with motherboard."+"\nAre you raising this request for yourself or on behalf of your colleague ?"
                //session.send(res);
                builder.Prompts.choice(session,res,"For Me|For Colleague",{ listStyle:builder.ListStyle.button});
            }
            else{
                var res = "I did not understand. Can you please rephraze."
                session.send(res);
            }
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, res, 'LaptopScreenIntent')
        },
        function(session,results){
            console.log(results);
            var res = ''
            if(results.response.entity.toLowerCase().includes('me')){
                res = "I have raised a request. IT support person will come to your desk in 30 minutes. The person will resolve the issue."
                session.endDialog(res);
            }
            else if(results.response.entity.toLowerCase().includes('friend') || results.response.entity.toLowerCase().includes('colleague')){
                res = "Please help me with your Colleague's Name and Employee ID"
                builder.Prompts.text(session,res);
            }
            else{
                //session.reset();
                res = "I did not understand. Can you please rephraze."
                session.send(res);
            }
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, res, 'LaptopScreenIntent')
        },
        function(session,results){
            console.log(results);
            var res = "I have raised a request for your Colleague. IT support person will come to his/her desk in 30 minutes. The person will resolve the issue."
            session.endDialog(res);
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, res, 'LaptopScreenIntent')            
        }
    ]).triggerAction({
        matches: 'LaptopScreenIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
