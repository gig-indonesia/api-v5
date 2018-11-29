const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require("./../helpers");

router.get("/account/:id", helpers.isAuthenticated, controller.findAccount);
router.get("/notif/", helpers.isAuthenticated, controller.showNotif);
router.get("/gigcreated", helpers.isAuthenticated, controller.showHost);
router.post("/", controller.createHost);
router.put("/:id", helpers.isAuthenticated, controller.updateHost);

module.exports = router;
