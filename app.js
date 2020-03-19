const dotenv = require("dotenv").config();
const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "/app/client")));

app.listen(PORT, () => {
  console.log("server runing...");
});
