const EnrollhereSchema=require('../Models/enrollhere');


exports.courseEnroll=(req,res,next)=>{
  const enrollhere=new EnrollhereSchema({
    subjectid:req.body.subjectid,
    userid:req.body.userid,
    tuitionname: req.body.tuitionname,
    location: req.body.location,
    course : req.body.course,
    fee:req.body.fee,
    status:req.body.status
});
enrollhere.save().then(enrollherecreated=>{
  res.status(201).json({
    message:"Subject added",
    enrollhere:{
      //...enrollherecreated
      id:enrollherecreated._id,
      subjectid:enrollherecreated.subjectid,
      userid:enrollherecreated.userid,
      tuitionname:enrollherecreated.tuitionname,
      location:enrollherecreated.location,
      course:enrollherecreated.course,
      fee:enrollherecreated.fee,
      status:enrollherecreated.status
    }
});
}).catch(error=>{
  res.status(500).json({
    message:'submitting failed',
  })
});
}

//GETTING ALL ENROLLMENT
exports.getenrollment=(req, res, next) => {
  EnrollhereSchema.find({"userid":req.params.id}).then(documents => {
    res.status(200).json({
      message: "enrollment fetched successfully!",
      documents: documents
    });
    console.log(documents);
  });
};

//DELETING A COURSE FROM USER
exports.deletecoursefromuser=(req, res, next) => {
  EnrollhereSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Deleted from user" });
  });
};


//GETTING ENROLLMENT BY ID
exports.getcoursebyid= (req, res, next) => {
  // console.log(req.params);
  EnrollhereSchema.find({"userid":req.params.id}).then(result => {
    if (result) {
      console.log(result);
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "course not found!" });
    }
  });
};
