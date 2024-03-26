const router = require("express").Router();
const users = require("./users");
const trips = require("./trips");
const initial = require("./initial");
const { authController } = require("../controllers");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

router.use("/users", users);
router.use("/trips", trips);
router.use("/initial", initial);

module.exports = router;
