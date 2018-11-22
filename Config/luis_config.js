var builder = require('botbuilder');

// require('dotenv-extended').load({path: '.env'});


// Make sure you add code to validate these fields
const luisAppId = process.env.LuisAppId || 'b65cc5c9-4c37-4af5-85e3-ceefc33ea3d9';
const luisAPIKey = process.env.LuisAPIKey || 'adef13b6b23d4ff8aa0804b35ec07af0';
const luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';


const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey + '&verbose=true&timezoneOffset=0&q=';
console.log(LuisModelUrl);

// Create a recognizer that gets intents from LUIS, and add it to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
module.exports = recognizer;


