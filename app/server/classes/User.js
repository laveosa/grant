const EventEmitter = require("events");
const fs = require("fs");
const uuid = require("uuid");
const path = require("path");

class User extends EventEmitter {
  constructor(_name, _email) {
    super();
    this.id = uuid.v4();
    this.name = _name || "user";
    this.email = _email || "user@email.com";

    this.createUser({
      id: this.id,
      name: this.name,
      email: this.email
    });
  }
  get name() {
    return this.name;
  }
  set name(name) {
    this.name = name;
  }
  get email() {
    return this.email;
  }
  set email(email) {
    this.email = email;
  }
  createUser(user) {
    fs.readFile(path.join(__dirname, ""));
  }
  updateUser(user) {}
  deleteUser(id) {}
}
