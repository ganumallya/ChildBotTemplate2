var builder = require('botbuilder');

const bot_reply = require('../bot_reply');
const {luis, qna_maker} = require('../Config/config');
const ConfirmPrompt = require('./Custom_Prompts/confirmation_prompt');

module.exports = (bot) => {
    
    // Import Luis Recognizer
    bot.recognizer(luis);
    // Import QnA Recognizer
    //bot.recognizer(qna_maker);

    


    //Conversation Registerations for LUIS

    //HR Onboarding dialogs
    //require('./HRPolicies/attendance_dialog')(bot);
    //require('./HRPolicies/leave_dialog')(bot);
    //require('./HRPolicies/hronboarding_QnAdialog')(bot);

    //require('./HRPolicies/salaryAdvance')(bot);
    //require('./HRPolicies/disciplinary')(bot);
    //require('./HRPolicies/consulting')(bot);

    //IT Support Dialogs
    require('./ITSupport/laptopScreen_dialog')(bot);
    require('./ITSupport/printer')(bot);
    
    
    //Small Talk Dialog
    require('./smalltalk_dialog')(bot);
    //require('./restrictUser')(bot)



    //Qna dialog Registeration
   // require('./qna_dialog')(bot);

    
    //Custom Prompt Registerations
    bot.dialog('ConfirmationPrompt', ConfirmPrompt);

    // Add function for calling your prompt from anywhere
    builder.Prompts.ConfirmationPrompt = function (session, prompt, options) {
        var args = options || {};
        args.prompt = prompt || options.prompt;
        session.beginDialog('ConfirmationPrompt', args);
    };
};
