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

let model = {
  nav: {
    tabs: [
      {
        url: "/home",
        name: "home",
        active: false
      },
      {
        url: "/users",
        name: "users",
        active: false
      },
      {
        url: "/companies",
        name: "companies",
        active: false
      },
      {
        url: "/vehicles",
        name: "vehicles",
        active: false
      },
      {
        url: "/foods",
        name: "foods",
        active: false
      },
      {
        url: "/log",
        name: "log",
        active: false
      }
    ],
    activateTab: url => {
      model.nav.tabs.forEach((tab, idx) => {
        tab.active = false;

        if (tab.url === url) {
          tab.active = true;
        }
      });
    }
  },
  text: {
    mainTitle: "Main page"
  }
};

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Home page";

  res.render("pages/home", model);
});

app.get("/users", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Users page";

  res.render("pages/users", model);
});

app.get("/foods", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Foods page";

  res.render("pages/foods", model);
});

app.get("/companies", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Companies page";

  res.render("pages/companies", model);
});

app.get("/vehicles", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Vehicles page";

  res.render("pages/vehicles", model);
});

app.get("/log", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Log page";

  res.render("pages/log", model);
});

app.use("/api/users", UsersRouter);

app.listen(PORT, () => {
  console.log("server runing...");
});
