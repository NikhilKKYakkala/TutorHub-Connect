const express=require("express");
const router= express.Router();
const SubjectwiseController=require("../Controller/subjectwisesetup");

router.post("",SubjectwiseController.createSubject);

router.get("",SubjectwiseController.getSubject);

router.delete("/:id", SubjectwiseController.deletesubject);

router.get("/:id",SubjectwiseController.getsubjectbyid);



module.exports=router;

