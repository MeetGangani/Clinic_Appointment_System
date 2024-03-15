const mongoose = require('mongoose');
const { login } = require('../controllers/Auth');
const mailSender = require('../utils/mailSender');
const OTPSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5*60,
    }
})



async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email,"Verification email",otp);
        console.log("mail response",mailResponse);
    }
    catch(err){
        console.log("Error occured while sending mail ",err);
        throw err;
    }
}
OTPSchema.pre("save",async function(next){
   
        await sendVerificationEmail(this.email,this.otp);
        next();
})

module.exports = mongoose.model('Otp', OTPSchema)