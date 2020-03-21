const EventEmitter = require("events");
const uuid = require("uuid");

class User extends EventEmitter {
  constructor(newUser) {
    super();
    this._id = uuid.v4();
    this._name = newUser.name || "new-user";
    this._email = newUser.email || "new-user@email.com";
    this._age = newUser.age || null;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  updateUser(user) {
    this._name = user.name || this._name;
    this._email = user.email || this._email;
    this._age = user.age || this._age;
  }
}

module.exports = User;
