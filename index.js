const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const dotenv = require("dotenv").config();
const yargs = require("yargs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(302, {
      Location: "/home"
    });

    res.end();
  }

  if (req.url === "/home") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      nav: {
        selectedTab: "/"
      },
      content: {
        contentId: null,
        contentUrl: null
      }
    };

    ejs.renderFile("./dev/views/home.ejs", model, (err, data) => {
      res.end(data);
    });
  }

  if (req.url === "/home/dashboard") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      nav: {
        selectedTab: "/"
      },
      content: {
        contentId: "dashboard",
        contentUrl: "./home-dashboard.ejs"
      }
    };

    ejs.renderFile("./dev/views/home.ejs", model, (err, data) => {
      res.end(data);
    });
  }

  if (req.url === "/home/messages") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      nav: {
        selectedTab: "/"
      },
      content: {
        contentId: "messages",
        contentUrl: "./home-messages.ejs"
      }
    };

    ejs.renderFile("./dev/views/home.ejs", model, (err, data) => {
      res.end(data);
    });
  }

  if (req.url === "/home/stats") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      nav: {
        selectedTab: "/"
      },
      content: {
        contentId: "stats",
        contentUrl: "./home-stats.ejs"
      }
    };

    ejs.renderFile("./dev/views/home.ejs", model, (err, data) => {
      res.end(data);
    });
  }

  if (req.url == "/about/:tabId") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      nav: {
        selectedTab: "/about"
      }
    };

    ejs.renderFile("./dev/views/about.ejs", model, (err, data) => {
      res.end(data);
    });
  }

  if (req.url === "/contacts") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      nav: {
        selectedTab: "/contacts"
      }
    };

    ejs.renderFile("./dev/views/contacts.ejs", model, (err, data) => {
      res.end(data);
    });
  }
});

let POST = process.env.POST || 3000;
server.listen(POST, err => err);
