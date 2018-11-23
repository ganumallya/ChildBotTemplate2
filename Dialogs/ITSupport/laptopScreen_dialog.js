
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/LaptopScreenIntentDialog', [
        function (session, args, next) {
            builder.Prompts.time(session,"Please help with a little information about the issue. From when are you facing this issue ?"); 
        },
        function(session,results){
            var timeD = builder.EntityRecognizer.resolveTime([results.response]); 
            console.log(timeD);
            builder.Prompts.choice(session,"When are you getting this issue. Is it when you touch the screen or is it screen flickering ?","By touch|Flickering",{ listStyle:builder.ListStyle.button});
        },
        function(session,results){
            console.log(results);
            if(results.response.entity.toLowerCase().includes('touch')){
                session.send("There must be some problem with the strip cable.");
                builder.Prompts.choice(session,"Are you raising this request for yourself or on behalf of your friend/colleague ?","For Me|For Friend/Colleague",{ listStyle:builder.ListStyle.button});
            }
            else if(results.response.entity.toLowerCase().includes('flickering')){
                session.send("There must be some problem with motherboard.");
                builder.Prompts.choice(session,"Are you raising this request for yourself or on behalf of your friend/colleague ?","For Me|For Friend/Colleague",{ listStyle:builder.ListStyle.button});
            }
            else{
                session.send("I did not understand. Can you please rephraze.");
            }
        },
        function(session,results){
            console.log(results);
            if(results.response.entity.toLowerCase().includes('me')){
                session.endDialog("I have raised a request. IT support person will come to your desk in 30 minutes. The person will resolve the issue.");
            }
            else if(results.response.entity.toLowerCase().includes('friend') || results.response.entity.toLowerCase().includes('colleague')){
                session.send("Please help me with your Colleague's/Friend's Name and Employee ID");
            }
            else{
                //session.reset();
                session.send("I did not understand. Can you please rephraze.");
            }
        },
        function(session,results){
            console.log(results);
            session.endDialog("I have raised a request for your Friend/Colleague. IT support person will come to his/her desk in 30 minutes. The person will resolve the issue.");
        }
    ]).triggerAction({
        matches: 'LaptopScreenIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};