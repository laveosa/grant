const EventEmitter = require("events");

const DBPath = "app/server/files/users.json";

if (!fs.existsSync(this._path)) {
  let usersArr = new Array(user);
  this._allUsers = usersArr;
  usersArr = JSON.stringify(usersArr);
  fs.writeFile(this._path, usersArr, err => {});
} else {
  fs.readFile(this._path, "utf8", (err, data) => {
    let usersArr = JSON.parse(data);
    usersArr.push(user);
    this._allUsers = usersArr;
    usersArr = JSON.stringify(usersArr);
    fs.writeFile(this._path, usersArr, err => {});
  });
}
