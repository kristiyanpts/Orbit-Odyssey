const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { productsController } = require("../controllers");

// middleware that is specific to this router

// router.get("/", productsController.getLatestsPosts);

module.exports = router;
