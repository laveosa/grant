const express = require("express");
const ViewController = require("../../controller/ViewController.js");

const router = express.Router();
const View = new ViewController();

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  View.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/users", (req, res) => {
  View.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/products", (req, res) => {
  View.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/companies", (req, res) => {
  View.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/vehicles", (req, res) => {
  View.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

router.get("/log", (req, res) => {
  View.organiseModel(req.url).then(model => {
    res.render("pages" + req.url, model);
  });
});

module.exports = router;
