const ProfileSchema=require('../Models/profile');


//ADDING PROFILE
exports.createProfile=(req,res,next)=>{
    const profile=new ProfileSchema({
      student_name: req.body.student_name,
      parent_name : req.body.parent_name,
      gender : req.body.gender,
      email:req.body.email,
      education_status:req.body.education_status,
      age:req.body.age,
      education_stream:req.body.education_stream,
      course_name:req.body.course_name,
      name_institute:req.body.name_institute,
      phone_number:req.body.phone_number,
      address:req.body.address
  });
  profile.save().then(profilecreated=>{
    res.status(201).json({
      message:"Profile added",
      Profile:{
//        ...profilecreated,
        id:profilecreated._id,
        student_name:profilecreated.student_name,
        parent_name:profilecreated.parent_name,
        gender:profilecreated.gender,
        email:profilecreated.email,
        education_status:profilecreated.education_status,
        age:profilecreated.age,
        education_stream:profilecreated.education_stream,
        course_name:profilecreated.course_name,
        name_institute:profilecreated.name_institute,
        phone_number:profilecreated.phone_number,
        address:profilecreated.address
      }
  });
  }).catch(error=>{
    console.log(error);
    res.status(500).json({
      message:'Creating a profile Failed',
    })
  });
}

//GETTING TUITION FROM DATABASE
exports.getprofile=(req, res, next) => {
  ProfileSchema.find().then(documents => {
    res.status(200).json({
      message: "Profile fetched successfully!",
      profile: documents
    });
  });
};


//DELETING THE profile FROM DATABASE
exports.deleteprofile=(req, res, next) => {
  ProfileSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Profile deleted!" });
  });
};


//GETTING profile BY ID
exports.getprofilebyid= (req, res, next) => {
  ProfileSchema.findById(req.params.id).then(profile => {
    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: "Profile not found!" });
    }
  });
};
