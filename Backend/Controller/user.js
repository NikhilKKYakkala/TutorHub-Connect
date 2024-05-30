const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      phoneno: req.body.phoneno,
      type:req.body.type
    });
    user.save().then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      }).catch(err => {
          res.status(500).json({
            message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Email not found"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Enter correct password"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        id:fetchedUser._id,
        emailid:fetchedUser.email,
        name:fetchedUser.firstname +" "+ fetchedUser.lastname,
        phonenumber:fetchedUser.phoneno,
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}

exports.getprofile=(req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: "User fetched successfully!",
      profile: documents
    });
  });
};

exports.deleteuser=(req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "User deleted!" });
  });
};

exports.resetpassword=(req, res, next) =>{
  crypto.randomBytes(32,(err,buffer)=>{
    if(err){
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({email:req.body.email}).then(user=>{
      if(!user){
        return res.status(422).json({error:"User does not exist"});
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result)=>{
        transporter.sendMail({
          to: user.email,
          from: "no-reply@TuitionWala.com",
          subject: "Password reset",
          html: `
          <p>Your requested for password reset</p>
          <h5>Click on this <a href = "http://localhost:3000/reset/${token}">link</a> to reset password</h5>
          `
        })
        res.json({message:"Check your email"});
      });
    });
  });
}
