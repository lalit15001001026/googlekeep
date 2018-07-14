var express=require("express")
var app=express()
var mongoose=require("mongoose")
var config=require("./config/config.json")
const port=process.env.port||config.port
var schemalogin=require("./models/database.js")
var bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
var routes=require("./routes/routes")
mongoose.connect('mongodb://localhost/googlekeep',(err,data)=>
{
    if(err)
    {
        console.log("database not connected")
    }
    else
    {
        console.log("database connected")
    }
})
app.use('/user',routes)
app.listen(port,()=>
{
    console.log("serevr stared and in listen mode")
})