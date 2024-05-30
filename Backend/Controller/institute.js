const Instituteschema=require('../Models/institute');


//SAVING TH INSTITUTE IN DATABASE FUNCTION
exports.createTuition=(req,res,next)=>{
  const url=req.protocol+'://'+req.get("host");
    const institute=new Instituteschema({
    title: req.body.title,
    content : req.body.content,
    sub_content : req.body.sub_content,
    no_of_faculty:req.body.no_of_faculty,
    year_of_establishment:req.body.year_of_establishment,
    phonenumber:req.body.phonenumber,
    email:req.body.email,
    website:req.body.website,
    address:req.body.address,
    imagePath:url+"/images/"+req.file.filename,
  });
  institute.save().then(institutedcreated=>{
    res.status(201).json({
      message:"post added",
      institute:{
//        ...institutedcreated,
        id:institutedcreated._id,
        title:institutedcreated.title,
        content:institutedcreated.content,
        sub_content:institutedcreated.sub_content,
        no_of_faculty:institutedcreated.no_of_faculty,
        year_of_establishment:institutedcreated.year_of_establishment,
        phonenumber:institutedcreated.phonenumber,
        email:institutedcreated.email,
        website:institutedcreated.website,
        address:institutedcreated.address,
        imagePath:institutedcreated.imagePath,
      }
  });
  }).catch(error=>{
    res.status(500).json({
      message:'Creating a Tuition Failed',
    })
  });
}


//GETTING TUITION FROM DATABASE
exports.gettuition=(req, res, next) => {
  Instituteschema.find().then(documents => {
    res.status(200).json({
      message: "Tuition fetched successfully!",
      tuition: documents
    });
  });
};


//DELETING THE TUITION FROM DATABASE
exports.deletetuition=(req, res, next) => {
  Instituteschema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Tuition deleted!" });
  });
};


//GETTING TUITION BY ID
exports.gettuitionbyid= (req, res, next) => {
  Instituteschema.findById(req.params.id).then(tuition => {
    if (tuition) {
      res.status(200).json(tuition);
    } else {
      res.status(404).json({ message: "Tuition not found!" });
    }
  });
};



