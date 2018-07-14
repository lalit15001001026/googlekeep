var mongoose=require("mongoose")
var schema=mongoose.Schema

var lal="user1"
var user_data=new schema(
    {
        name: String,
        username: String,
        date_of_birth:String,
        password: String,
        email:String,
        priority:Number,
        notes:{
            Name_Of_Note : String,
            Content_Of_Note: String,
            Reminder:Date,
            Period_Of_Reminder_In_Hour:Number
        }
    }
)

module.exports=mongoose.model(lal,user_data)