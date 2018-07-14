var user_data=require("../models/database")
exports.add_user=(req,res)=>
{
    if(!req.body.username||!req.body.password||!req.body.username||!req.body.date_of_birth)
    {
        res.json(
            {
                success:false,
                error:"enter the all teh detail all are necessary"
            }
        )
    }
    else{
        new user_data({
        username:req.body.username,
        date_of_birth:req.body.date_of_birth,
        name:req.body.name,
        password:req.body.password
    }).save((err,data)=>
{
    if(err)
    {
        res.json(
            {
                success: false,
                msg:"something went wrong"
            }
        )
    }
    else
    {
        res.json(
            {
                succes: true,
                msg:'new user added to database successfully'
            }
        )
    }
})}
}
exports.get_user=(req,res)=>
{
    user_data.find({},(err,data)=>
{
    if(err)
    {
        res.json(
            {
                success: false,
                msg : "problem in fetching the data from the database"
            }
        )
    }
    else{
        res.json(
            {
              success:true,
              msg: "successfully fetch the data",
              data: data  
            }
        )
    }
})
}
exports.edit_user=(req,res)=>
{
    if(!req.body.username||!req.body.password)
       {
           req.json(
               {
                   status: failed,
                   msg: "enter the required details"
               }
           )
       }
       else
       {
           user_data.findOne({username:req.body.username},(err,data)=>
        {
            if(err)
            {
                res.json(
                    {
                        status:failed,
                        msg: "error occured during finding the data"
                    }
                )
            }
            else if(!data)
            {
                res.json(
                    {
                        status: false,
                        msg: "user not found"
                    }
                )
            }
            else{
                user_data.findOneAndUpdate({username:req.body.username},{$set: { name:req.body.name,date_of_birth:req.body.date_of_birth}},(err,data)=>
                {
                    if(err)
                    {
                        res.json(
                            {
                                success:false,
                                msg:"something went wrong"
                            }
                        )
                    }
                    else
                    {
                        res.json
                        (
                            {success:true,
                                msg: "data updated"

                            }
                        )
                    }
                }

            )
        }
       })
}
}