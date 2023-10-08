const router = require("express").Router();

const { createNewUser, userLogin, getUserById, getAllUsers, getMynetwork } = require("../controllers/UserController");
const { auth } = require("../middlewares/authMiddleware");

router.post("/register", createNewUser);
router.post("/login", userLogin);
router.post("/get-user-by-id", auth, getUserById);
router.post("/get-all-users", auth, getAllUsers);
router.post("/mynetwork", auth, getMynetwork);

module.exports = router;