const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require('./../helpers')

router.post("/", helpers.isAuthenticated, controller.create);

module.exports = router;
