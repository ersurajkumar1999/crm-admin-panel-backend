const router = require("express").Router();

const { createNewUser, userLogin, getUserById } = require("../controllers/UserController");
const { auth } = require("../middlewares/authMiddleware");

router.post("/register", createNewUser);
router.post("/login", userLogin);
router.post("/get-user-by-id", auth, getUserById);

module.exports = router;