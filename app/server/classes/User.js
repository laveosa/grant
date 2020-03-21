const EventEmitter = require("events");
const uuid = require("uuid");

class User {
  constructor(user) {
    this.id = uuid.v4();
    this.name = user && user.name.length > 0 ? user.name : "new-user";
    this.email = user && user.email.length > 0 ? user.email : null;
    this.age = user && user.age.length > 0 ? user.age : null;
  }
  updateUser(user) {
    this.name = user && user.name.length > 0 ? user.name : this._name;
    this.email = user && user.email.length > 0 ? user.email : this._email;
    this.age = user && user.age.length > 0 ? user.age : this._age;
  }
}

module.exports = User;
