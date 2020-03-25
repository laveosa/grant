const fs = require("fs");

const DBpath = "./app/server/DB/files/page-articles.json";

class ArticlesOrganiser {
  constructor() {
    this.allArticles = {};
  }
  organise(url) {
    return {
      mainTitle: "Page Title"
    };
  }
  getArticlesFromDB() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  initialize() {
    return Promise.all([this.getArticlesFromDB()]).then(response => {
      return response;
    });
  }
}

module.exports = ArticlesOrganiser;
