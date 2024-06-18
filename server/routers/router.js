const express = require("express");
const controller= require("../controllers/controller")
const router = express.Router();


router.get("/test",controller.testController);
router.post("/add-member",controller.addMember);
router.get("/show-members",controller.showAllMembers);
router.get("/sorted-members",controller.sortedMembers);

module.exports= router;