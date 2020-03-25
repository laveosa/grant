const express = require("express");

const router = express.Router();

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

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Home page";

  res.render("pages/home", model);
});

router.get("/users", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Users page";

  res.render("pages/users", model);
});

router.get("/foods", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Foods page";

  res.render("pages/foods", model);
});

router.get("/companies", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Companies page";

  res.render("pages/companies", model);
});

router.get("/vehicles", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Vehicles page";

  res.render("pages/vehicles", model);
});

router.get("/log", (req, res) => {
  model.nav.activateTab(req.url);
  model.text.mainTitle = "Log page";

  res.render("pages/log", model);
});

module.exports = router;
