const express=require("express");
const router= express.Router();
const ProfileController=require("../Controller/profile");

router.post("",ProfileController.createProfile);

router.get("",ProfileController.getprofile);

router.delete("/:id", ProfileController.deleteprofile);

router.get("/:id",ProfileController.getprofilebyid);



module.exports=router;
