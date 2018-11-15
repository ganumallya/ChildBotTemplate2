var builder = require('botbuilder');

const bot_reply = require('../bot_reply');
const logger = require('../logger');
const {config} = require('../Config/config');
const conversation_topic_name = require('../topic_name');

module.exports = (bot) => {
    
    bot.dialog('precise', [
        function (session, args, next) {

            if(args.intent.score > config.RELATED_THRESHOLD){                                
                var topic_name = '';
                if(args.intent.intent == 'qna'){
                    var metadataEntity = args.intent.answers[0].metadata;
                    for (let index = 0; index < metadataEntity.length; index++) {
                        if(metadataEntity[index].name == "topic_name"){
                            topic_name = metadataEntity[index].value;
                        }
                    }
                    session.privateConversationData.callDialog = 'qna';
                }else{
                    topic_name = conversation_topic_name[args.intent.intent];
                    if (typeof topic_name === 'undefined') {
                        bot_response = bot_reply.sorry_Message()+"\n\n"+bot_reply.Connect_LiveAgent(); 
                        logger.warn({"untrained_text": session.privateConversationData.AskedQuestion, "status": "unresolved", session, bot_response});
                        session.endDialog(bot_response);   
                        return;
                    }
                    session.privateConversationData.callDialog = args.intent.intent;
                }
                var bot_response = "Did you mean "+ topic_name; 
                session.privateConversationData.AskedQuestion = session.message.text;
                session.privateConversationData.intent = args.intent;
                logger.info({session, args, bot_response});
                builder.Prompts.ConfirmationPrompt(session, bot_response);
            }else{
                if(!session.userData.precise_message){
                    session.userData.precise_message = 1;
                    var bot_response = bot_reply.precise_message().toString().replace("<text>",session.message.text); 
                    logger.warn({"untrained_text": session.message.text, "status": "warn", session, bot_response});
                }else{
                    session.userData.precise_message = 0;
                    bot_response = bot_reply.sorry_Message()+"\n\n"+bot_reply.Connect_LiveAgent(); 
                    logger.warn({"untrained_text": session.privateConversationData.AskedQuestion, "status": "unresolved", session, bot_response});
                }
                session.endDialog(bot_response);   
            }
        },
        function(session,results){
            if(results.response == "yes"){
                args = session.privateConversationData.intent;
                session.replaceDialog(`/${session.privateConversationData.callDialog}`, {"intent" :args});
            }else{
                bot_response = bot_reply.sorry_Message()+"\n\n"+bot_reply.Connect_LiveAgent(); 
                logger.warn({"untrained_text": session.privateConversationData.AskedQuestion, "status": "unresolved", session, bot_response});
                session.endDialog(bot_response);
            }
        }

    ]).triggerAction({
        onFindAction:(session,callback) =>{ 
            if(session.intent == null){
                callback(null,0);
            }else if(session.intent.score > config.PRECISE_THRESHOLD && session.intent.score < config.CONFIDENCE_THRESHOLD && session.dialogStack().length < 2){
                callback(null,1,{"intent":session.intent});
            }else{
                callback(null,0);
            }
        }
    });
};