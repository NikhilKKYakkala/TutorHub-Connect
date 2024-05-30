const mongoose=require('mongoose');

const ProfileSchema=mongoose.Schema({
  student_name : { type :String, required:true},
  parent_name : { type :String, required:true},
  gender : { type :String, required:true },
  email : { type :String, required:true},
  education_status : { type :String, required:true},
  age:{type:String,required:true},
  education_stream:{ type:String,require:true},
  course_name:{ type:String,require:true},
  name_institute:{ type:String,require:true},
  phone_number:{ type:String,require:true},
  address:{ type:String,require:true},
});

 module.exports = mongoose.model("ProfileSchema",ProfileSchema);
