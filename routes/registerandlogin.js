var dblogin=require("../models/database")
var jwt=require("jsonwebtoken")



exports.register=(req,res)=>
{
    if(!req.body.name||!req.body.username||!req.body.password)
    {
        res.json
        (
            {
                success: false,
                msg: "please enter all detail"
            }
        )
    }
    else
    {
     dblogin.findOne({ username:req.body.username},(err,logindata)=>
    {
        if(err)
        {
            res.json
            (
                {
                    success: false,
                    msg: "something went wrong"
                }
            )
        }
        else if(!logindata||logindata==null)
        {
            new dblogin
            (
                {
                    name:req.body.name,
                    username:req.body.username,
                    date_of_birth:req.body.date_of_birth,
                    password: req.body.password
                }
            ).save((err, savedata)=>
            {
              if(err)
               {
                    res.json(
                       {
                          success:false,
                          msg: "please try afetr sometimes"
                        }
                            )

                }
                else
                {
                    res.json(
                              {
                                 success:true,
                                  msg: "registration successful"
                            }
                             )
                 }
               }
            )
        }
        else
        {
            res.json(
                {
                    success: false,
                    msg: "you are already register"
                }
                     )
        }

    }
)   
    }
}
exports.login=(req,res)=>
{
    if(!req.body.username||!req.body.password)
       {
           res.json({
               success:false,
               msg: "please enter the all detail"
           })
       }
       else
       {
           dblogin.findOne({useraname:req.body.useraname},(err,login)=>
        {
            if(err)
            {
                res.json(
                    {
                        success: false,
                        msg: "please try after sometime"
                    }
                )
            }else if(!login||!login==null)
            {
                res.json(
                    {
                        success:false,
                        msg: "please register first"
                    }
                )
            }
            else if(login.password!==req.body.password)
            {
                res.json(
                    {
                        success:false,
                        msg: "incorrect password"
                    }
                )
            }
            else
            {
                var tokendata ={
                    name:login.name,
                    email:login.email
                }
                var token=jwt.sign(tokendata,'secret')
                res.json(
                    {
                        success:true,
                        token: token,
                        msg: "login done"
                    }
                )
            }
        })

    }}