const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async (email,title,body) =>{
    try{
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        console.log("transporter created",transporter);
        let info = await transporter.sendMail({
            from:`ProLang ${process.env.MAIL_USER}`,
            to:`${email}`,
            subject:`${title}`,
            html: body
        });
        console.log("message sent successfully",info);
        return info;
    }
    catch(err){
        console.log("error in sending mail",err.message);
        return err;
    }

}