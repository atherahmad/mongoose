const express = require("express");
const router = express.Router();

const {createUser, getUser, getOneUser} = require("../controllers/userController")

 router.post("/adduser", createUser);
router.get("/getusers", getUser);
router.post("/finduser", getOneUser) 



module.exports = router

