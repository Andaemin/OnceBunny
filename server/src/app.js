const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json()); 

const indexRouter = require("./routes/index");
const memberRouter = require("./routes/member");

app.use("/", indexRouter);
app.use("/member", memberRouter);

app.use((req, res, next) => {
    console.log(`📢 요청 받음: ${req.method} ${req.url}`);
    next();
  });
  

module.exports = app;
