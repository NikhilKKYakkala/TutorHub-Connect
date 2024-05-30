const mongoose=require('mongoose');

const EnrollhereSchema=mongoose.Schema({
  subjectid: { type :String, required:true},
  userid: { type :String, required:true},
  tuitionname: { type :String, required:true},
  location: { type :String, required:true},
  course: { type :String, required:true},
  fee: { type :String, required:true},
  status:{type:String,required:true}
});

 module.exports = mongoose.model("EnrollhereSchema",EnrollhereSchema);
 /*  id:string;
    subjectid:string;
    userid:string;
    tuitionname:string;
    location:string;
    course:string;
    fee:string;
    status:string
 */
