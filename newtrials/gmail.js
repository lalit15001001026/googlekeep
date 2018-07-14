
const nodemailer=require("nodemailer")
const xoauth2=require("xoauth2")
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
             xoauth2 :xoauth2.createXOAuth2Generator({
                 user: 'lalit15001001026@gmail.com',
                 pass: 'lalit123456789',
                 clientId:'833755791798-18b6835891k82ak757mrsjnlk5lg135j.apps.googleusercontent.com',
                 clientSecret:'smGxbVQ0B_pwuoNMOpmaKW4P',
                refreshToken:'1/kbEtZsVIwJEtjKkwLGbXTbQo8IchDD-Rbpo0sU9lgVk'
             }
            )
         
        },
  tls:
  {
      rejectUnauthorized:false
  }
}));
// var transporter=nodemailer.createTransport({
//      service: 'gmail',
//      auth: {
//          xoauth2 :xoauth2.createXOAuth2Generator({
//              user: 'lalit15001001026@gmail.com',
//              pass: 'lalit123456789',
//              clientId:'833755791798-qn5bkif932snqt93i50uunjm0sas7im0.apps.googleusercontent.com',
//              clientSecret:'PyyNmo3AuX8IBk2gsit1ySqJ',
//             refreshToken:'1/kbEtZsVIwJEtjKkwLGbXTbQo8IchDD-Rbpo0sU9lgVk'
//          }
//         )
     
//     },
//     tls:{
//         rejectUnauthorized:false
//     }
     
// })
;
var mailOptions={
    from:'lalit15001001026@gmail.com',
    to:"utkarshsrivastava434@gmail.com",
    subject:'try',
    text: 'hiii welcome to the mean stack'
}
transporter.sendMail(mailOptions,(err,info)=>
{
    if(err)
    {
        //console.log("write")
        console.log(err)
    }
    else
    {
        console.log("email sent")
        console.log(info)
    }
});