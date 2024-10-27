"use strict";
const connectDB = require("./db/connect");
const { config } = require("./db/config.js");

const app = require("./app.js");

//Server setup
const port = config.PORT || 3000;

//db connect
const start = async () => {
  try {
    await connectDB(config.MONGODB_URI);
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
      console.log(`http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

//start server
start();
