const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json()); 

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

module.exports = app;
