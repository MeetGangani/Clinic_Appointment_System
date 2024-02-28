const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require("../Models/User");
require('dotenv').config();
//signup
exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(409).json({
                success: false,
                message: "already existing user",
            })
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
    try{
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
    catch(err){
        console.log(err);
        return res.status(500).json({ success: false, message:"Login failed" });
    }
}