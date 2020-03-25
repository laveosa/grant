const fs = require("fs");

const DBpath = "./app/server/DB/files/navigation-tabs.json";

class NavigationOrganiser {
  constructor() {
    this.tabs = [];
  }
  organise(url) {
    this.activateTab(url);

    return {
      tabs: this.tabs
    };
  }
  getTabsFromDB() {
    return new Promise((resolve, reject) => {
      fs.readFile(DBpath, "utf8", (err, data) => {
        if (!data || data.length <= 0) {
          reject(data);
        }

        data = JSON.parse(data);
        this.addTabsList(data);
        resolve(data);
      });
    });
  }
  addTab(tab) {
    this.tabs.push(tab);
  }
  addTabsList(tabsList) {
    if (!tabsList || tabsList.length <= 0) return;

    this.deleteAllTabs();

    tabsList.forEach((elem, idx) => {
      this.addTab(elem);
    });
  }
  updateTab(url, tab) {
    if (!this.tabs || this.tabs.length <= 0) return;

    this.tabs.forEach((tab, idx) => {
      if (tab.url === url) {
        this.tabs[idx] = tab;
      }
    });
  }
  deleteTab(url) {
    if (!this.tabs || this.tabs.length <= 0) return;

    this.tabs.forEach((tab, idx) => {
      if (tab.url === url) {
        this.tabs.splice(idx, 1);
      }
    });
  }
  deleteAllTabs() {
    if (!this.tabs || this.tabs.length <= 0) return;

    this.tabs = [];
  }
  activateTab(url) {
    if (!this.tabs || this.tabs.length <= 0) return;

    this.tabs.forEach((tab, idx) => {
      tab.active = false;

      if (tab.url === url) {
        tab.active = true;
      }
    });
  }
  initialize() {
    return Promise.all([this.getTabsFromDB()]).then(response => {
      return response;
    });
  }
}

module.exports = NavigationOrganiser;
