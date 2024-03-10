const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config/config");
const dotenv = require("dotenv");
dotenv.config();

const myEmailPassword = process.env.PWD;
const transporter = nodemailer.createTransport({
  service:"hotmail",
  auth:{
    user:"harshit.yadav00@outlook.com",
    pass:myEmailPassword
  }
})


// Signup
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // const mailOptions = {
    //   from: "harshit.yadav00@outlook.com",
    //   to: email,
    //   subject: "Signup Successful",
    //   text: `Congratulations You have Registered to our platfrom. You can use the following credentials to access SimpleBlogs- Email:${email}, Password:${password}`,
    // };

    // transporter.sendMail(mailOptions,(error,info)=>{
    //   if(error){
    //     console.log("Error sending email",error)
    //   }
    //   else{
    //     console.log(info.response)
    //   }
    // })
  
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Password is incorrect" });
    }
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "3h",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
