const tuitiondataSchema=require('../Models/tuitiondata');


exports.storingdatafortuition=(req,res,next)=>{
  const tuitiondata=new tuitiondataSchema({
    subjectid:req.body.subjectid,
    userid:req.body.userid,
    tuitionname: req.body.tuitionname,
    email: req.body.email,
    studentname:req.body.studentname,
    course : req.body.course,
    tstatus:req.body.tstatus,
});
tuitiondata.save().then(tuitiondatacreated=>{
  res.status(201).json({
    message:"Subject added",
    tuitiondata:{
      //...tuitiondatacreated
      id:tuitiondatacreated._id,
      subjectid:tuitiondatacreated.subjectid,
      userid:tuitiondatacreated.userid,
      tuitionname:tuitiondatacreated.tuitionname,
      email:tuitiondatacreated.email,
      studentname:tuitiondatacreated.studentname,
      course:tuitiondatacreated.course,
      tstatus:tuitiondatacreated.tstatus
    }
});
}).catch(error=>{
  res.status(500).json({
    message:'submitting failed',
  })
});
}

//GETTING ALL ENROLLMENT
exports.gettuitiondata=(req, res, next) => {
  tuitiondataSchema.find().then(documents => {
    res.status(200).json({
      message: "Tuitiondata fetched successfully!",
      tuitiondata: documents
    });
  });
};

//DELETING A COURSE FROM USER
exports.deletecoursefromtuition=(req, res, next) => {
  tuitiondataSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Deleted from tuition " });
  });
};


//GETTING ENROLLMENT BY ID
exports.gettuitionbyid= (req, res, next) => {
  tuitiondataSchema.findById(req.params.id).then(result => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "course not found!" });
    }
  });
};
