const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");
const UsersRouter = require("./app/server/router/api/user.js");
const PagesRouter = require("./app/server/router/nav/navigation.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs",
    layoutsDir: path.join(__dirname, "app/server/views/layouts/"),
    partialsDir: path.join(__dirname, "app/server/views/partials/")
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/server/views/"));

app.use(express.static(path.join(__dirname, "app/client/")));
app.use(express.json());

app.use(PagesRouter);
app.use("/api/users", UsersRouter);

app.listen(PORT, () => {
  console.log("server runing...");
});
