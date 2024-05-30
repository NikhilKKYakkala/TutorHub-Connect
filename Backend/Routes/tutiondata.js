const express=require("express");
const router= express.Router();
const tuitiondataController=require("../Controller/tuitiondata");


router.post("",tuitiondataController.storingdatafortuition);

router.get("", tuitiondataController.gettuitiondata);

router.delete("/:id", tuitiondataController.deletecoursefromtuition);

router.get("/:id",tuitiondataController.gettuitionbyid);

module.exports=router;
