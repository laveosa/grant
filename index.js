const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const dotenv = require("dotenv").config();
const yargs = require("yargs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let model = {
      title: "GRRR title"
    };

    ejs.renderFile("./dev/views/home.ejs", model, (err, data) => {
      res.end(data);
    });
  }
});

let POST = process.env.POST || 3000;
server.listen(POST, err => err);
