const EventEmitter = require("events");
const NavigationOrganiser = require("../classes/NavigationOrganiser.js");

class ArticlesOrganiser {
  constructor() {
    this.allArticles = {};
  }
  organise(url) {
    return {
      mainTitle: "Page Title"
    };
  }
  getAllPageTitlesFromDB() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  initialize() {
    return Promise.all([this.getAllPageTitlesFromDB()]).then(response => {
      return response;
    });
  }
}

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
