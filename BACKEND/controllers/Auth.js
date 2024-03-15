const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require("../Models/User");
require('dotenv').config();
const crypto = require('crypto');
const { error } = require('console');
//signup
exports.signup = async (req, res) => {
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }

    // Validate password function
    function isStrongPassword(password) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(password);
    }
    try {
        const { email, password } = req.body;

        const existUser = await User.findOne({ email });

        

        if (existUser) {
            return res.status(409).json({
                success: false,
                message: "already existing user",
            })
        }
        if (!validateEmail(email)) {
            return res.status(401).json({ message: 'Invalid email address' });
        }

        if (!isStrongPassword(password)) {
            return res.status(402).json({ message: 'Password should be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character' });
        }
        let hashedpassword;
        try {
            hashedpassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password"
            })
        }

        const user = await User.create({
            email, password: hashedpassword
        })

        return res.status(200).json({
            success: true,
            message: "User created successfully"
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User creation failed"
        });
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false, message: "please fill all the details"
            });
        }
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        const payload = {
            email: user.email

        }

        if (await bcrypt.compare(password, user.password)) {
            let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h", });
            user.token = token;
            user.password = undefined;


            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("token", token, options).status(200).json({ success: true, token, user, message: "User logged in successfully" });


        }
        else {
            return res.status(403).json({ success: false, message: "Invalid password" });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Login failed" });
    }
}

exports.resetpass = (req, res) => {
    const { email } = req.body;

    crypto.randomBytes(20, (err, buf) => {
        const token = buf.toString('hex');

        const transporter = nodemailer.createTransport({
            service: 'Gmail',

            auth: {
                user: "healtheasy96@gmail.com",
                pass: "muqkjsxkoissazob",
            }
        })

        const mailOptions = {
            from: 'healtheasy96@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('Password reset email sent');
            }
        });
    });

    res.redirect('/forgotpasswordconfirmation');



}


// exports.tokenverify =  (req,res)=> {
//     User.findOne({})
// }