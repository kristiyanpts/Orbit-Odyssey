const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { tripsController } = require("../controllers");

// middleware that is specific to this router

router.get("/", tripsController.getLatestsPosts);

module.exports = router;
