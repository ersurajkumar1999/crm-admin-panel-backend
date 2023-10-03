const { createNewUser, userLogin } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/register", createNewUser);
router.post("/login", userLogin);

module.exports = router;