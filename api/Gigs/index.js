const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require("./../helpers");

router.get("/:id", helpers.isAuthenticated, controller.getApplicant);
router.get("/", controller.getAll);
router.post("/", helpers.isAuthenticated, controller.create);
router.delete("/:id", helpers.isAuthenticated, controller.deleteOne);
router.put("/:id", helpers.isAuthenticated, controller.update);
router.get("/search", helpers.isAuthenticated, controller.search);

module.exports = router;
