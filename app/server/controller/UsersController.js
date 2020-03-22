const EventEmitter = require("events");
const fs = require("fs");

const MyUsersProv = require("../DB/provider/UsersProvider.js");
const UsersProvider = new MyUsersProv();

class UsersController extends EventEmitter {
  constructor() {
    super();
  }
  createUser(user) {
    return UsersProvider.createUser(user);
  }
  readUserById(id) {
    return UsersProvider.readUserById(id);
  }
  readUserByName(name) {
    return UsersProvider.readUserByName(name);
  }
  updateUser(id, user) {
    return UsersProvider.updateUser(id, user);
  }
  deleteUser(id) {
    return UsersProvider.deleteUser(id);
  }
  deleteAllUsers() {
    return UsersProvider.deleteAllUsers();
  }
  getAllUsers() {
    return UsersProvider.getAllUsers();
  }
}

module.exports = UsersController;
