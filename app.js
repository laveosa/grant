const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");

const UsersController = require("./app/server/controller/UsersController.js");
const UsersProvider = require("./app/server/DB/provider/UsersProvider.js");

const app = express();
const PORT = process.env.PORT || 3000;
const Users = new UsersProvider();

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
  res.render("home", {});
});

const userKey = "/api/users";

app.get(userKey + "/", (req, res) => {
  Users.getAllUsers().then(response => {
    res.json(response);
  });
});

app.post(userKey + "/", (req, res) => {
  Users.createUser(req.body).then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

app.get(userKey + "/:id", (req, res) => {
  Users.readUserById(req.params.id).then(response => {
    res.json(response);
  });
});

app.post(userKey + "/:id", (req, res) => {
  Users.updateUser(req.params.id, req.body).then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

app.get(userKey + "/:name", (req, res) => {
  Users.readUserByName(req.params.name).then(response => {
    res.json(response);
  });
});

app.delete(userKey + "/", (req, res) => {
  Users.deleteAllUsers().then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

app.delete(userKey + "/:id", (req, res) => {
  Users.deleteUser(req.params.id).then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

app.listen(PORT, () => {
  console.log("server runing...");
});
