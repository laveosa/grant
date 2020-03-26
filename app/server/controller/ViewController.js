const EventEmitter = require("events");
const NavigationProvider = require("../DB/provider/NavigationProvider.js");
const ArticlesProvider = require("../DB/provider/ArticlesProvider");

const Navigation = new NavigationProvider();
const Articles = new ArticlesProvider();

class ViewController extends EventEmitter {
  constructor() {
    super();
    this.model = null;
  }
  organiseModel(url) {
    return Promise.all([Navigation.initialize(), Articles.initialize()]).then(
      response => {
        this.model = new Object();
        this.model.nav = Navigation.organise(url);
        this.model.articles = Articles.organise(url);
        return this.model;
      }
    );
  }
}

module.exports = ViewController;
