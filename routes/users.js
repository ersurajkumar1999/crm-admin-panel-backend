const { createNewUser } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/api/register", createNewUser);

module.exports = router;