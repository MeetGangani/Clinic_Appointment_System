const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
   
    // username:{
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    // accountType:{
    //     type: String,
    //     enum:["Admin", "Patient", "Doctor"],
    //     required: true,
    // },

    // additionDetails: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref:"Profile"
    // }
});

module.exports = mongoose.model('User', userSchema);