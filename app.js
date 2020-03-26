const express = require("express");
const UsersRouter = require("./app/server/router/api/user.js");
const PagesRouter = require("./app/server/router/nav/navigation.js");
const ConfigController = require("./app/server/controller/ConfigController.js");

//  variables area
const app = express();
const PORT = process.env.PORT || 3000;
const config = new ConfigController();

//  setup view eangine, static folder, body parser
config.setDefaultConfigSettings(app);

//  connect API and navigation routers
app.use(PagesRouter);
app.use("/api/users", UsersRouter);

app.listen(PORT, () => {});
