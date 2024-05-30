const express=require("express");
const router= express.Router();
const multerFile=require('../MiddleWare/mime');
const InstituteController=require("../Controller/institute");
const instituteschemas=require('../Models/institute');





router.post("",multerFile, InstituteController.createTuition);

router.get("", InstituteController.gettuition);

router.delete("/:id", InstituteController.deletetuition);

router.get("/:id",InstituteController.gettuitionbyid);

module.exports=router;
