/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");
const qnamaker = require('./Dialogs/QnaMaker');
const {smalltalk_qna_maker} = require('./Config/config');
//require('dotenv-extended').load({path: '.env'});

const bot_reply = require('./bot_reply');
var myMiddleware = require('./middleware');
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

console.log("prcess: ",process.env.MicrosoftAppId);
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId ,
    appPassword: process.env.MicrosoftAppPassword ,
    openIdMetadata: process.env.BotOpenIdMetadata  
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.
var bot = new builder.UniversalBot(connector, function (session, args) {
    //qnamaker(smalltalk_qna_maker,session.message.text,(result)=>{
    session.endDialog("Sorry, I am not trained enough to answer your query. Please contact IT support team on ID - itsupport@taoautomation.com");
    //});
});

//Logging Incoming and Outgoing message in consoless
bot.use({
    botbuilder: function (session, next) {
        myMiddleware.logIncomingMessage(session, next);
        //myMiddleware.getSkypeID(session,next);
        //console.log("Skype User ID is......"+session.privateConversation.skypeID)
    },
    send: function (event, next) {
        myMiddleware.logOutgoingMessage(event, next);
        
    },
    
});

// Setting Storage for Bot
bot.set('storage', tableStorage);

// var in_memory_storage = new builder.MemoryBotStorage();
// bot.set('storage', in_memory_storage); 

//Dialog Configurations
require('./Dialogs/dialog')(bot);
