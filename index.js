const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const dotenv = require("dotenv").config();

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./dev/views/home.ejs", "utf8", (err, data) => {
      if (err) throw err;

      let model = {
        title: "Home page"
      };

      res.end(ejs.render(data, model));
    });
  }
});

console.log(process.env.TEST);

let POST = process.env.POST || 3000;
server.listen(POST, err => err);
