var builder = require('botbuilder');
const {config} = require('../../Config/config');
const { userList } = require('./../userList')

module.exports = (bot) => {
    bot.dialog('/RestrictUserDialog', [
        function (session, args, next) {
            session.endDialog("Hey, this bot will come to you soon")
        }
    ]).triggerAction({
        onFindAction:(session,callback)=>{
            var userid = session.message.address.user.id;
            if(userList.includes(userid)){
                callback(null,0)
            }
            else{
                callback(null,1)
            }
        }
    });
};
