const mongoose=require('mongoose');

const SubjectWiseSchema=mongoose.Schema({
  Tuitionname: { type :String, required:true},
  location: { type :String, required:true},
  subject: { type :String, required:true},
  fee: { type :String, required:true},
  uniquecode: { type :String, required:true},
});

 module.exports = mongoose.model("SubjectWiseSchema",SubjectWiseSchema);
