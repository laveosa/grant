const EventEmitter = require("events");
const fs = require("fs");

const User = require("../../classes/User.js");

const DBPath = "app/server/DB/files/users.json";

class UsersProvider extends EventEmitter {
  constructor() {
    super();
  }
  createUser(user) {
    return new Promise((resolve, reject) => {
      let newUser = new User(user);

      if (!fs.existsSync(DBPath)) {
        let allUsers = new Array(newUser);
        allUsers = JSON.stringify(allUsers);

        fs.writeFile(DBPath, allUsers, err => {
          resolve(true);
        });
      } else {
        fs.readFile(DBPath, "utf8", (err, data) => {
          let allUsers = data;

          if (!data || data.length <= 0) {
            allUsers = new Array(newUser);
          } else {
            allUsers = JSON.parse(allUsers);
            allUsers.push(newUser);
          }

          allUsers = JSON.stringify(allUsers);
          fs.writeFile(DBPath, allUsers, err => {
            resolve(true);
          });
        });
      }
    });
  }
  readUserById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(DBPath, "utf8", (err, data) => {
        if (!data || data.length <= 0) return false;

        data = JSON.parse(data);
        data.forEach((elem, idx) => {
          if (elem.id == id) {
            resolve(elem);
            return;
          }
        });

        resolve(null);
      });
    });
  }
  readUserByName(name) {
    return new Promise((resolve, reject) => {
      fs.readFile(DBPath, "utf8", (err, data) => {
        if (!data || data.length <= 0) return false;

        var users = [];
        data = JSON.parse(data);
        data.forEach((elem, idx) => {
          if (elem.name.toLowerCase() == name.toLowerCase()) {
            users.push(elem);
          }
        });

        resolve(users);
      });
    });
  }
  updateUser(id, user) {
    return new Promise((resolve, reject) => {
      fs.readFile(DBPath, "utf8", (err, data) => {
        if (!data || data.lenth <= 0) {
          return false;
        }

        data = JSON.parse(data);
        data.forEach((elem, idx) => {
          if (elem.id === id) {
            user.id = data[idx].id;
            data[idx] = user;
          }
        });

        data = JSON.stringify(data);
        fs.writeFile(DBPath, data, err => {
          resolve(data);
        });
      });
    });
  }
  deleteUser(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(DBPath, "utf8", (err, data) => {
        if (!data || data.length <= 0) return false;

        data = JSON.parse(data);
        data.forEach((elem, idx) => {
          if (elem.id === id) {
            data.splice(idx, 1);
          }
        });

        data = JSON.stringify(data);
        fs.writeFile(DBPath, data, err => {
          resolve(data);
        });
      });
    });
  }
  deleteAllUsers() {
    return new Promise((resolve, reject) => {
      fs.writeFile(DBPath, new Array(), err => {
        fs.readFile(DBPath, "utf8", (err, data) => {
          resolve(data);
        });
      });
    });
  }
  getAllUsers() {
    return new Promise((resolve, reject) => {
      fs.readFile(DBPath, "utf8", (err, data) => {
        if (data && data.length > 0) {
          resolve(JSON.parse(data));
        } else {
          resolve([]);
        }
      });
    });
  }
}

module.exports = UsersProvider;
