"use strict";
require('dotenv').config({ path: "./config.env" });

const app = require("./app.js");

// 1) Server setup
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(process.env.NODE_ENV, `http://localhost:${port}`);
});
