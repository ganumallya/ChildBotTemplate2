
var builder = require('botbuilder');
const {config} = require('../../Config/config');

const mongo = require('../../mongoLog')

module.exports = (bot) => {
    
    bot.dialog('/DisciplinaryIntentDialog', [
        function(session,args,next){
            console.log(args);
            var res = '';
            if(args.intent.entities.length>0){
                if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('dismissal')){
                    res = 'In case of policy breach, a dismissal can be given to the employee. All aspects of dismissal will be handled by HR in accordance with the clauses of the contract and the applicable laws.'
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('suspension')){
                    res = 'TAO automation may suspend the employee for 15 days or till the matter is investigated in case of breach of policy. This would normally be without pay. The suspension does not by itself represent a final action in the matter.'
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('other')){
                    res = "The Disciplinary action against an investigation will include Warning, Reprimand or censure, Public written apology, Community Service, curtailment of priviledges, Bar on representing the company at any extra or co-curricular activity, removal or bar on holding positions of responsibility within the company, Barring foreign assignments, Fine imposed by the Committee that may be donated to a fund/charity, mandatory attendance in a workshop/program, any other action prescribed in the Act/Code of Misconduct/Service rules/Contract rules, termination, suspension, demotion, withholding increments, withholding promotion, Bond of good behavior, Debarring from supervisory duties."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('intermediate')){
                    res = "If the employee engages in a intermediate or gross misconduct, following course of steps is taken:\n1. The manager has to be make a formal complaint to a pre-designated disciplinary panel consisting of 2 senior managers and one HR representative.\n2. The manager is met by the panel to ascertain facts around the event.\n3. The employee is informed in writing of initial meeting with the manager, that there is a complaint against him/her.\n4. The matter is investigated by the panel.\n5. The employee is also spoken to ascertain his/her side of events by the panel.\n6. The investigation is completed and the panel recommends the action to be taken to the unit head/location head/country head as well as HR."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('minor')){
                    res = "In case of minor misconduct, either in person discussion or a written warning is issued against the employee. Normally, a discussion between the employee and his/her manager happens. All such discussions are recorded and placed in the employee's file. If there is a disagreement between the employee and the manager after the discussion, the HR representative mediates the discussion. If the same behavior is repeated, a written warning will be issued and the same filed in the employee's record."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('procedure')){
                    res = "It consists of the action taken against a policy breach based on the violation of policy which is:\n1. Minor misconduct,\2. Intermediate or gross misconduct,\3. Other disciplinary actions."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('false attendance')){
                    res = "Recording the work time of another employee or allowing any other employee to record your work time, or falsifying information, either your own or another employee's is considered as policy breach."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('false employee')){
                    res = "Falsifying employee records, employment information, other company records will breach the disciplinary policy and necessary actions will be taken against the employee."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('deviation')){
                    res = "The normal course of corrective actions includes a discussion, verbal and written warnings, other disciplinary actions including suspension and termination."
                    session.endDialog(res);
                }
                else if(args.intent.entities[0].resolution.values[0].toLowerCase().includes('policy')){
                    res = "Disciplinary policy is the action taken in response to a deviation or policy violation usually follows a pattern of increasing seriousness."
                    session.endDialog(res);
                }
            }
            else{
                res = "Disciplinary policy is the action taken in response to a deviation or policy violation usually follows a pattern of increasing seriousness."
                session.endDialog(res);
            }
            
            var id = session.message.address.user.id;
            mongo.createNewDaoc(id, session.message.text, res, 'DisciplinaryIntent')
        }
    ]).triggerAction({
        matches: 'DisciplinaryIntent',
        intentThreshold:config.CONFIDENCE_THRESHOLD
    });
};
