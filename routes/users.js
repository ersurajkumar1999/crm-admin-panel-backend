const router = require("express").Router();

router.post("/api/register", (req, res) => {
  res.send("Let's build a CRUD API!"+req.body ?.name);
});

module.exports = router;