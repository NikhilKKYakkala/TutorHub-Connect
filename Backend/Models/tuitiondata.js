const mongoose=require('mongoose');

const tuitiondataSchema=mongoose.Schema({
  subjectid: { type :String, required:true},
  userid: { type :String, required:true},
  tuitionname: { type :String, required:true},
  email: { type :String, required:true},
  studentname: { type :String, required:true},
  course: { type :String, required:true},
  tstatus:{type:String,required:true}
});

 module.exports = mongoose.model("tuitiondataSchema",tuitiondataSchema);
