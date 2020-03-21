const EventEmitter = require("events");
const fs = require("fs");

const User = require("../classes/User.js");

const DBPath = "app/server/files/users.json";

class UsersController extends EventEmitter {
  constructor() {
    super();
  }
  createUser(user) {
    return new Promise((resolve, reject) => {
      let newUser = new User(user);

      if (!fs.existsSync(DBPath)) {
        let allUsers = new Array(newUser);
        let users = allUsers;
        allUsers = JSON.stringify(allUsers);

        fs.writeFile(DBPath, allUsers, err => {
          resolve(users);
        });
      } else {
        fs.readFile(DBPath, "utf8", (err, data) => {
          let allUsers = data;
          allUsers = JSON.parse(allUsers);
          allUsers.push(newUser);
          let users = allUsers;
          allUsers = JSON.stringify(allUsers);
          fs.writeFile(DBPath, allUsers, err => {
            resolve(users);
          });
        });
      }
    });

    // if (!fs.existsSync(this._path)) {
    //   let usersArr = new Array(user);
    //   this._allUsers = usersArr;
    //   usersArr = JSON.stringify(usersArr);
    //   fs.writeFile(this._path, usersArr, err => {});
    // } else {
    //   fs.readFile(this._path, "utf8", (err, data) => {
    //     let usersArr = JSON.parse(data);
    //     usersArr.push(user);
    //     this._allUsers = usersArr;
    //     usersArr = JSON.stringify(usersArr);
    //     fs.writeFile(this._path, usersArr, err => {});
    //   });
    // }
  }
  readUser() {}
  updateUser() {}
  deleteUser() {}
}

module.exports = UsersController;
