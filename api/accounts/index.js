const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require("./../helpers");

router.get("/me", helpers.isAuthenticated, controller.getCurrentUserData);
router.get("/:id", controller.search);
router.get("/", helpers.isAuthenticated, controller.getAll);
router.post("/login", controller.login);
router.post("/register", controller.register);
router.delete("/:id", controller.deleteOne);
router.put("/:id", controller.update);

module.exports = router;
