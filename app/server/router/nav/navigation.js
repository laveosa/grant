const express = require("express");
const PagesController = require("../../controller/PagesController.js");

const router = express.Router();
const Pages = new PagesController();

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  Pages.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/users", (req, res) => {
  Pages.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/foods", (req, res) => {
  Pages.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/companies", (req, res) => {
  Pages.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/vehicles", (req, res) => {
  Pages.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/log", (req, res) => {
  Pages.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

module.exports = router;
