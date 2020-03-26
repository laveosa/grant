const express = require("express");
const exphbs = require("express-handlebars");
const EventEmitter = require("events");

class ConfigController extends EventEmitter {
  constructor() {
    super();
  }
  setViewEngine(app) {
    app.engine(
      "hbs",
      exphbs({
        defaultLayout: "main",
        extname: "hbs",
        layoutsDir: "./app/server/views/layouts/",
        partialsDir: "./app/server/views/partials/"
      })
    );
    app.set("view engine", "hbs");
    app.set("views", "./app/server/views/");
  }
  setStaticFolder(app) {
    app.use(express.static("./app/client/"));
  }
  setBodyParser(app) {
    app.use(express.json());
  }
  setDefaultConfigSettings(app) {
    this.setViewEngine(app);
    this.setStaticFolder(app);
    this.setBodyParser(app);
  }
}

module.exports = ConfigController;
