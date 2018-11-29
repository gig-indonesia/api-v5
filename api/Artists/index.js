const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require("./../helpers");

router.put("/updateprofile", helpers.isAuthenticated, controller.updateprofile)
router.get("/search", controller.search);
router.get("/profile", helpers.isAuthenticated, controller.profile);
router.get("/", controller.getAll);
router.get("/notif/:id", helpers.isAuthenticated, controller.getNotif);
router.get("/applied", helpers.isAuthenticated, controller.getApplicant);


router.post("/", controller.createArtist);
// router.delete("/:id", controller.deleteOne);
// router.put("/:id", controller.search);

module.exports = router;
