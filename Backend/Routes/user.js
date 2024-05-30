const express = require("express");

const UserController = require("../controller/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.delete("/:id",UserController.deleteuser);

router.get("", UserController.getprofile);

router.post("reset-passsword", UserController.resetpassword);

module.exports = router;
