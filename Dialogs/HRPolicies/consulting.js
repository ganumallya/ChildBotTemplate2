
var builder = require('botbuilder');
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/ConsultingIntentDialog', [
        function(session,args,next){
            console.log(args);
            var resp = '';
            if(args.intent.entities.length>0){
                if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('own arrangements')){
                    resp = "If you make your own arrangements for accommodation, you are eligible for an amount per day, subject to the declaration of having incurred such expenditure and you will not be entitled to claim out of pocket expenses. However a lump sum is payable only in the event of your having stayed with your relatives/friends and when it involves overnight stay."
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('local conveyance')){
                    resp = "Expenses incurred on account of travel, to and from the airport/bus station/railway station, will be reimbursed at actuals. The reimbursement will be made for office activities and as far as possible, the group travels together. Local Conveyance should not normally exceed INR 250/- per day.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('travel advance')){
                    resp = "A travel advance will require the approval of your manager.\nTravel claims should be made within 7 working days from your date of return.\nIf travel claims are not made within the above mentioned period, then the travel advance issued will be recovered from the same month\'s or subsequent month\'s payroll depending on the payroll cut-off date.\nYou will not be issued any fresh Travel Advance until earlier claims are settled.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('settle')){
                    resp = "You will have to settle your bills within 7 working days of return."
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('policy for accomodation')){
                    resp = "Food and Misc. expenses will cover expenses incurred towards food and other living expenses like laundry, newspaper, tips.\nAccomodation in hotels will be arranged by the travel service providers.\nHotel and other vouchers should support claims for reimbursement of actual expenses."
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('approving')){
                    resp = "Travel requisitions will be approved by the Manager/Department Head and have to be submitted to the accounts department after approval."
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('fares')){
                    resp = "The fly back air fares are capped as below :\n1. From Bangalore/Chennai to Mumbai/Pune or Mumbai/Pune to Bangalore/Chennai - 7000\n2. From Bangalore to Chennai or Chennai to Bangalore - 6000.\nAny additional costs on a confirmed trip will have to be borne by the employee. Cancellation and/or re-booking will also have to be borne by the employee for the amounts in excess of the fly back limits indicated above."
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('benefits')){
                    resp = "If applicable in your Project Assignment Letter, for employees currently on projects outside their base cities in India - \nA. Bookings can be done by the individual or requested in writing from the TAO travel desk.\(email : Lakshmi@taoautomation.com\)\nB. All requests for fly back or individual bookings must be done a minimum of 15 days in advance.\nDo you want to know about Fly Back fares:";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('outside base city')){
                    resp = "The entitlement for mode of transport for outside base city is Air / II AC train for Senior Management, Lead/Manager, Team member. If you have to use a higher mode of travel due to exigencies of work, prior approval of concerned manager is necessary. Used air tickets and boarding passes have to be submitted to the accounts department at the time of submission of the travel expense report. This is a requirement under the Income Tax Act.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('personal vehicle')){
                    resp = "If you use your own car for local conveyance/Road travel, fuel expenses will be reimbursed upto INR 10/Km at actuals. If you use your own bike/scooters for local conveyance/ Road travel, fuel expense will be reimbursed up to an amount of INR 7/km. The company will be not resposible for any mishap/untoward incidents if you use your own vehicle. Supporting bills need to be submitted for all Local conveyance and Road Travel.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('cab')){
                    resp = "If the consulting assignment is within the base city of he employee, typically, maximum travel allowance of INR 350/- will be paid per day against actuals. Should the distance be >15 kms, this amount will be upto INR 500/- against actuals. Should the distance be considerable (>20kms), it will be considered for exceptional amounts should that be necessary. If the company arranges for an alternative transport, this allowance will not be applicable. You are advised to use \"Car Pool\" or Volvo options should they be available.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('transport policy')){
                    resp = "Transport claim varies depending on whether the transport is within the base city or outside the base.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('eligible')){
                    resp = "All employees who are on consulting assignments within their base location or in a city that is not their base location within India for a short duration.";
                    session.endDialog(resp);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('within base city')){
                    resp = "Transport claim varies depepnding on the mode of transport used.";
                    session.endDialog(resp);
                }
            }
            else{
                resp = "TAO's policy for Consulting defines the allowances and benefits for employees for consulting assignment within or in a city/town outside their base city in India for a short duration.";
                session.endDialog(resp);
            }
            var id = session.message.address.user.id;
            require('../../mongoLog')(id, session.message.text, resp, 'PrinterIntent')
        }
    ]).triggerAction({
        matches: 'ConsultingIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
