const express = require('express');
const handlebars = require('handlebars');
const session = require('express-session');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const inquirer = require('inquirer');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/connection');
const { appendFile } = require('fs');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(
    session({
        secret: "Top Secret",
        resave: false,
        saveUninitialized: true, 
        cookie: {},
        store: new SequelizeStore({
            db: sequelize
        }),
    })
);

const { engine } = require('express-handlebars');

app.engine(
    "handlebars",
    engine({ extname: ".handlebars", defaultLayout: "main"})
);

app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes.js"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
