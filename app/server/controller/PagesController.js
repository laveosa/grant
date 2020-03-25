const EventEmitter = require("events");
const NavigationOrganiser = require("../classes/NavigationOrganiser.js");
const ArticlesOrganiser = require("../classes/ArticlesOrganiser.js");

const Navigation = new NavigationOrganiser();
const Articles = new ArticlesOrganiser();

class PagesController extends EventEmitter {
  constructor() {
    super();
    this.model = {
      nav: null,
      articles: null
    };
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

module.exports = PagesController;
