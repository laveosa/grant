const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");
const UsersRouter = require("./app/server/router/api/user.js");

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
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", {});
});

app.get("/users", (req, res) => {
  res.render("users");
});

app.get("/add-user", (req, res) => {
  res.render("add-user");
});

app.get("/companies", (req, res) => {
  res.render("companies");
});

app.get("/add-companie", (req, res) => {
  res.render("add-companie");
});

app.use("/api/users", UsersRouter);

app.listen(PORT, () => {
  console.log("server runing...");
});
