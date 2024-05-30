const SubjectwiseSchema=require('../Models/subjectwisesetup');


//SAVING TH INSTITUTE IN DATABASE FUNCTION
exports.createSubject=(req,res,next)=>{
    const subjectwise=new SubjectwiseSchema({
    Tuitionname: req.body.Tuitionname,
    location: req.body.location,
    subject : req.body.subject,
    fee:req.body.fee,
    uniquecode:req.body.uniquecode,
  });
  subjectwise.save().then(Subjectcreated=>{
    res.status(201).json({
      message:"Subject added",
      Subjectwisesetup:{
        //...Subjectcreated
        id:Subjectcreated._id,
        Tuitionname:Subjectcreated.Tuitionname,
        location:Subjectcreated.location,
        subject:Subjectcreated.subject,
        fee:Subjectcreated.fee,
        uniquecode:Subjectcreated.uniquecode
      }
  });
  }).catch(error=>{
    res.status(500).json({
      message:'Creating a Subject Failed',
    })
  });
}


//GETTING SUBJECT FROM DATABASE
exports.getSubject=(req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const SubjectQuery=SubjectwiseSchema.find();
  let fecthedSubject;
  if(pageSize && currentPage)
  {
    SubjectQuery.skip(pageSize*(currentPage-1)).limit(pageSize);
  }
  SubjectQuery.then(documents => {
    fecthedSubject=documents;
    return SubjectwiseSchema.countDocuments();
  }).then(count=>{
    res.status(200).json({
      message: "Subject fetched successfully!",
      Subjectwisesetup: fecthedSubject,
      maxSubject:count
    });
  });
};


//DELETING THE TUITION FROM DATABASE
exports.deletesubject=(req, res, next) => {
  SubjectwiseSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Subject deleted!" });
  });
};


//GETTING Subject BY ID
exports.getsubjectbyid= (req, res, next) => {
  SubjectwiseSchema.findById(req.params.id).then(Subject => {
    if (Subject) {
      res.status(200).json(Subject);
    } else {
      res.status(404).json({ message: "Subject not found!" });
    }
  });
};


