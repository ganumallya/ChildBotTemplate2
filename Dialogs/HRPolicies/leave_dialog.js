
var builder = require('botbuilder');
const {config} = require('../../Config/config');
const optionalHoliday = require('./optionalHolidaysList')
const jsonn = require('./holidayList')

module.exports = (bot) => {
    
    bot.dialog('/LeaveIntentDialog', [
        function(session,args,next){
            console.log(args);
            if(args.intent.entities.length>0){
                if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("sick") || args.intent.entities[0].resolution.values[0].toLowerCase().includes("casual") ){
                    session.endDialog("You are eligible for 7 Casual/Sick Leave days per annum. At any rate sick leave will not exceed 12 days in a calendar year and the days in excess of 7 days will be granted only on providing proof of illness and at the discretion of management.");
                }else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("privilege")){
                    session.endDialog("You are eligible for 15 Privileged Leaves per annum. During the probation period of 6 months, while PL will be credited, you are not entitled to take PL. You may avail your PL only after completing your probation period.");
                }else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("permanent")){
                    session.send("Please find Holiday List for the current Year below :");
                    jsonn((rowss)=>{
                        card = rowss;
                        var msgg = new builder.Message(session).addAttachment(rowss);
                        session.endDialog(msgg);
                    })
                }else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("optional")){
                    optionalHoliday((rowss)=>{
                        card = rowss;
                        var msgg = new builder.Message(session).addAttachment(rowss);
                        session.send(msgg);
                    })
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("applying")){
                    session.send("The application for Leave should be made in the prescribed form or on-line using the Leave System. You should get the Leave approved by your Manager and/or HR. Privileged Leave and Casual Leave cannot be combined together.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("encashment")){
                    session.send("Only Privileged Leave can/will be encashed. Anu unused Casual/Sick Leave will lapse at the end of the calendar year. Privileged Leave can be encashed at the time of separation.")
                }
            }else{
            //builder.Prompts.text(session,"In total you can avail 15 Privileged Leaves and 7 Sick/Casual Leaves in a year. Privileged Leaves and Casual Leaves cannot be combined while availing leaves. Leaves get credited at the beginning of each quarter.");
            session.send("In total you can avail 15 Privileged Leaves and 7 Sick/Casual Leaves in a year. Privileged Leaves and Casual Leaves cannot be combined while availing leaves. Leaves get credited at the beginning of each quarter.")
            builder.Prompts.choice(session, "Which leave type do you want to know?", "Privileged Leave|Casual/Sick Leave|Holiday|Optional Leaves|All", { listStyle: builder.ListStyle.button });
            }
        },
        function(session,results){
            console.log("---------");
            console.log(results);
            if(results.response.entity.toLowerCase().includes("casual") || results.response.entity.toLowerCase().includes("sick")){
                session.endDialog("You are eligible for 7 Casual/Sick Leave days per annum. At any rate sick leave will not exceed 12 days in a calendar year and the days in excess of 7 days will be granted only on providing proof of illness and at the discretion of management.");
            }
            else if(results.response.entity.toLowerCase().includes("privileged")){
                session.endDialog("You are eligible for 15 Privileged Leaves per annum. During the probation period of 6 months, while PL will be credited, you are not entitled to take PL. You may avail your PL only after completing your probation period.");
            }
            else if(results.response.entity.toLowerCase().includes("holiday")){
                session.send("Please find Holiday List for the current Year below :");
                jsonn((rowss)=>{
                    card = rowss;
                    var msgg = new builder.Message(session).addAttachment(rowss);
                    session.endDialog(msgg);
                })
            }
            else if(results.response.entity.toLowerCase().includes("optional")){
                optionalHoliday((rowss)=>{
                        card = rowss;
                        var msgg = new builder.Message(session).addAttachment(rowss);
                        session.send(msgg);
                    })
            }
            else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("applying")){
                 session.send("The application for Leave should be made in the prescribed form or on-line using the Leave System. You should get the Leave approved by your Manager and/or HR. Privileged Leave and Casual Leave cannot be combined together.");
            }
            else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes("encashment")){
                    session.send("Only Privileged Leave can/will be encashed. Any unused Casual/Sick Leave will lapse at the end of the calendar year. Privileged Leave can be encashed at the time of separation.")
            }
            }
    ]).triggerAction({
        matches: 'LeaveIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
