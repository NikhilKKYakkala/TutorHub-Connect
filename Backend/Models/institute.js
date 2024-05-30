const mongoose=require('mongoose');

const InstituteSchema=mongoose.Schema({
  title : { type :String, required:true},
  content : { type :String, required:true },
  sub_content : { type :String, required:true},
  no_of_faculty : { type :String, required:true },
  year_of_establishment:{ type :String, required:true },
  phonenumber : { type :String, required:true},
  email : { type :String, required:true},
  website:{type:String,required:true},
  address:{type:String,required:true},
  imagePath:{ type:String,require:true},
});

 module.exports = mongoose.model("Instituteschema",InstituteSchema);
