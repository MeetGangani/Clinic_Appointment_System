const nodemailer = require('nodemailer');
const mailSender= async (email,title,body)=>{
    
    try{
        let transporter = nodemailer.createTransport({
           
            host: "smtp.gmail.com",
            auth: {
                user: "healtheasy96@gmail.com",
                pass: "muqkjsxkoissazob"
            }
        })
        let info = transporter.sendMail({
            from: 'healtheasy96@gmail.com',
            to: email,
            subject: title,
            html: body

        })
        console.log(info);
        return info;
    }catch(err){
        console.log(err.message);
    }
}

module.exports = mailSender;