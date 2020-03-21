const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");

const UsersController = require("./app/server/controller/UsersController.js");

const app = express();
const PORT = process.env.PORT || 3000;
const Users = new UsersController();

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
// app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/add-user", (req, res) => {
  Users.createUser();
});

app.get("/all", (req, res) => {
  res.send("success");
});

app.listen(PORT, () => {
  console.log("server runing...");
});
