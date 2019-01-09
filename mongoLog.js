var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Harshita:Harsha%40123@cluster1-0vtjg.azure.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var datetime = new Date();
var blogSchema = new Schema({
  userid:  String,
  inmsg: String,
  outmsg:   String,
  time: { type: Date },
  intent: String
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = (id, inMsg, outMsg, intentUsed, callback)=>{
        var newRow = new Blog({userid: id, inmsg: inMsg, outmsg: outMsg, time: datetime, intent: intentUsed})
        newRow.save().then(() => console.log("Log saved"))
        //callback()
};

