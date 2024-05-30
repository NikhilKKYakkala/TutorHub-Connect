const express =require("express");
const path=require('path');
const bodyParser=require('body-parser');
const mongoose =require("mongoose");

//Routes imports
const userRoutes = require("./routes/user");
const instituteRoutes=require('./Routes/Institute');
const profileRoutes=require('./Routes/Profile');
const subjectwisesetupRoutes=require('./Routes/subjectwisesetup');
const tuitiondataRoutes=require('./Routes/tutiondata');
const enrollhereRoutes=require('./Routes/enrollhere');


//CONNECTING TO MOGNODB DATABASE
mongoose.connect("mongodb+srv://manthan:9989115198@TuitionWala-84l8d.mongodb.net/TuitionWala?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
  console.log('Connected to Database')
}).catch(()=>{
  console.log("Failed to connect")
});

const app=express();

//BODY-PARSER TO JSON CONVERSION
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// USING BACKEND IMAGES
app.use("/images",express.static(path.join("Backend/images")));


// ACCESS CONTROL
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Acccept,Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
});

//  ADD ROUTES HERE
app.use("/api/institute",instituteRoutes);
app.use("/api/profile",profileRoutes);
app.use("/api/subjectwise-setup",subjectwisesetupRoutes);
app.use("/api/user", userRoutes);
app.use("/api/enrollment",enrollhereRoutes);
app.use("/api/tuitionstatus",tuitiondataRoutes);


module.exports=app;
