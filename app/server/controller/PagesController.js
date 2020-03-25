const EventEmitter = require("events");

class NavigationOrganiser {
  constructor(tabs) {
    this.tabs = tabs || [];
  }
  organise(url) {
    this.activateTab(url);

    return {
      tabs: this.tabs
    };
  }
  addTab(tab) {
    this.tabs.push(tab);
  }
  addTabsList(tabsList) {
    tabsList.forEach((elem, idx) => {
      this.addTab(elem);
    });
  }
  updateTab(id, tab) {}
  deleteTab(id) {}
  deleteAllTabs() {}
  activateTab(url) {
    if (!this.tabs || this.tabs.length <= 0) return;

    this.tabs.forEach((tab, idx) => {
      tab.active = false;

      if (tab.url === url) {
        tab.active = true;
      }
    });
  }
}

class ArticlesOrganiser {
  constructor() {
    this.allArticles = {};
  }
  organise(url) {
    return {
      mainTitle: "Page Title"
    };
  }
}

const navTabs = [
  {
    url: "/home",
    name: "home",
    active: false
  },
  {
    url: "/users",
    name: "users",
    active: false
  },
  {
    url: "/companies",
    name: "companies",
    active: false
  },
  {
    url: "/vehicles",
    name: "vehicles",
    active: false
  },
  {
    url: "/foods",
    name: "foods",
    active: false
  },
  {
    url: "/log",
    name: "log",
    active: false
  }
];
const Navigation = new NavigationOrganiser(navTabs);
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
    return new Promise((resolve, reject) => {
      this.model = new Object();

      this.model.nav = Navigation.organise(url);
      this.model.articles = Articles.organise(url);

      resolve(this.model);
    });
  }
}

module.exports = PagesController;
