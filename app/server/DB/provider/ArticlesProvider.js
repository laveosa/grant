const fs = require("fs");

const DBpath = "./app/server/DB/files/page-articles.json";

class ArticlesProvider {
  constructor() {
    this.articles = [];
  }
  organise(url) {
    return {
      mainTitle: this.getPageMainTitle(url)
    };
  }
  getArticlesFromDB() {
    return new Promise((resolve, reject) => {
      fs.readFile(DBpath, "utf8", (err, data) => {
        if (!data || data.length <= 0) return false;

        data = JSON.parse(data);
        this.articles = data;
        resolve(this.articles);
      });
    });
  }
  getPageMainTitle(url) {
    if (!url || url.length <= 0) return false;

    let mainTitle = "no title for this page";

    this.articles.forEach((elem, idx) => {
      if (elem.url == url) {
        mainTitle = elem.mainTitle;
      }
    });

    return mainTitle;
  }
  initialize() {
    return Promise.all([this.getArticlesFromDB()]).then(response => {
      return response;
    });
  }
}

module.exports = ArticlesProvider;
