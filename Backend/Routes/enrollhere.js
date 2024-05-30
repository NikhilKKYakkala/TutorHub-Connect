const express=require("express");
const router= express.Router();
const EnrollhereController=require("../Controller/enrollhere");


router.post("",EnrollhereController.courseEnroll);

router.get("/:id", EnrollhereController.getenrollment);

router.delete("/:id", EnrollhereController.deletecoursefromuser);

//router.get("/:id",EnrollhereController.getcoursebyid);

module.exports=router;
