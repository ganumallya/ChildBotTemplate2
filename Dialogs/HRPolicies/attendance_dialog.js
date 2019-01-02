
const {config} = require('../../Config/config');

module.exports = (bot) => {
    
    bot.dialog('/AttendanceIntentDialog', [
        function (session, args, next) {
            console.log(args);
            if(args.intent.entities.length>0){
                if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('hours')){
                    session.endDialog('Office working hours are 9:00 AM to 6:30 PM. Minimum working hours are 5 hour per day and you can avail half day leave if not completing 9 hours 30 mins per day.');
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('allowance') || args.intent.entities[0].resolution.values[0].toLowerCase().includes('beyond')){
                    session.endDialog("Employees working on customer projects and/or locations will have to work according to the work timings of the customer. Should these work timings require working >=4 hours post 8 pm or before 6 am on a continuous basis, employees will be eligible for extended shift allowance of INR 6600/- per month or prorata.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('on duty')){
                    session.endDialog("The employees who will be on ON DUTY outside the office for official purpose/s are requested to intimate this through email/attendace system under the head Leave/On Duty Intimation on same day or earlier failing which the day will be considered as leave.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('record')){
                    session.endDialog("All employees shall personally record their daily attendance by signing in the attendance register kept at the Reception or in any other system for recording attendance that may be introduced by the organization from time to time viz., access control system/ bio metrics system/swipe card etc.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('late')){
                    session.endDialog("Employees who do not fulfill the minimum daily duration presence as mentioned under Working hours section in a month will have their leave deducted on a prorata basis. Reporting managers can grant permission to their team members twice a month towards their personal work for which there will not be any deduction in leave.");
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('absence')){
                    session.endDialog("The absence of an employee without prior approval shall be treated as unauthorized and pay will be deducted for that period. Sufficient leave balance does not make unauthorized absence legitimate, nor does it lead to automatic debiting of leave account. In case of unauthorized absence for more than 3 consecutive working days, a warning letter will be sent to the employees present and permanent address as well as email ID requesting justification for the absence. If no response is received from the concerned employee for unauthorized absence even after 3 days from the date on which the Warning Letter is sent by the Company, a tremination letter will be sent to the employee's residence by registered post, intimating him/her that his/her servcie has been terminated by the Company with immediate effect. In cases of unauthorized absence, no service letter or relieving letter will be issued.");
                }
            }
            else{
                session.endDialog("This policy aims at defining guidelines for attendance for employees based in India. Please note that the normal hours of work will continue to be (as per the appoitment letter) from the office of TAO and this policy should not be viewed as a change in the terms of employment.");
            }
        }
    ]).triggerAction({
        matches: 'AttendanceIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
