const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");

const User = require("./app/server/classes/User.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs",
    layoutsDir: path.join(__dirname, "app/server/views/layouts/"),
    partialsDir: path.join(__dirname, "app/server/views/partials/")
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/server/views/"));

app.use(express.static(path.join(__dirname, "app/client/")));

app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/add-user", (req, res) => {
  var Nik = new User({
    name: req.query.name || "Nik",
    email: req.query.email || "laveosa@yahoo.com",
    age: req.query.age || 18
  });

  Nik.getAllUsers().then(response => {
    res.json(response);
  });
});

app.get("/all", (req, res) => {
  res.send("success");
});

app.listen(PORT, () => {
  console.log("server runing...");
});
