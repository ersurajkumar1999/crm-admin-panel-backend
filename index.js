const express = require("express");
const router = require("./routes/users");
const PORT = 5000;

const app = express();

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
