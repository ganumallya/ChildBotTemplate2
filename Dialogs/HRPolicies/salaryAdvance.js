
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/SalaryAdvanceIntentDialog', [
        function(session,args,next){
            console.log(args);
            if(args.intent.entities.length>0){
                if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('policy')){
                    session.endDialog('The aim of this policy is to provide bridge finances to employees in case of an emergency or cetain events.');
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('eligibility')){
                    session.endDialog('All India based employees are eligible for Salary Advance.');
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('amount')){
                    session.endDialog("You are eligible for a maximum of 2 months' salary as advance, subject to approval.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('situations')){
                    session.endDialog("An advance can be requested in case of an emergency\(medical or otherwise\) or an unplanned activity.\nA.Advance for marriage: In case of your/child's marriage.\nB. Advance for medical emergency: In case of your illness or accident of or immediate family members.\nC. Advance for payment of fees for a recognized course or education program.\nD. Advance for any other emergency: Will be considered on case to case basis.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('recovered')){
                    session.endDialog("The advance given to you will be recovered in 6 equal month installaments\(maximum, depending upon the amount sanctioned\) from your month salary.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('monthly')){
                    session.endDialog("The net monthly salary will include the current monthly net salary comprising the fixed components like - Basic, Flexible Benefit Allowance. It will exclude any variable component not paid on monthly basis.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('times')){
                    session.endDialog("The number of salary advance will be limited to a 3 times a year based on the required approval process. However, if a previous salary advance has not been recovered fully, you will not be eligible for another salary advance.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('applying')){
                    session.endDialog("The application for Salary Advance should be made in the prescribed form. You should get the request approved ny your Department Head and/or HR and forward the approval to the Accounts Department.");
                }
            }
            else{
                session.endDialog("The aim of this policy is to provide bridge finances to employees in case of an emergency or cetain events.");
            }
        }
    ]).triggerAction({
        matches: 'SalaryAdvanceIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
