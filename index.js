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
      }
    };

    ejs.renderFile("./dev/views/home.ejs", model, (err, data) => {
      res.end(data);
    });
  }

  if (req.url == "/about") {
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

    console.log("contacts server check point...");

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
