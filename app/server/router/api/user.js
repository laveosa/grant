const express = require("express");
const UsersController = require("../../controller/UsersController.js");

const router = express.Router();
const Users = new UsersController();

router.get("/", (req, res) => {
  Users.getAllUsers().then(response => {
    res.json(response);
  });
});

router.post("/", (req, res) => {
  Users.createUser(req.body).then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

router.get("/:id", (req, res) => {
  Users.readUserById(req.params.id).then(response => {
    res.json(response);
  });
});

router.post("/:id", (req, res) => {
  Users.updateUser(req.params.id, req.body).then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

router.get("/:name", (req, res) => {
  Users.readUserByName(req.params.name).then(response => {
    res.json(response);
  });
});

router.delete("/", (req, res) => {
  Users.deleteAllUsers().then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

router.delete("/:id", (req, res) => {
  Users.deleteUser(req.params.id).then(response => {
    Users.getAllUsers().then(response => {
      res.json(response);
    });
  });
});

module.exports = router;
