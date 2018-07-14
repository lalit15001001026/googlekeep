var jwt=require('jsonwebtoken')


exports.tokenverify=(req,res,next)=>
{
    if(!req.headers['x-access-token'])
    {
        res.json({
            success: false,
            msg: "you are not authenticated"
        })
    }
    else{
        jwt.verify(req.headers['x-access-token'],'secret',(err,decoded)=>
    {
      if(err)
      {
          res.json(
              {
                  success: false,
                  msg: "authentication failed"
              }
          )
      }  
      else
      {
          req.decoded=decoded
          next();
      }
    })
    }
}