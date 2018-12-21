var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.User.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:username", function (req, res) {
    db.User.findOne({ where: { id: req.params.username } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //route to connect users style choices
  app.get("/user/:username/beers", function (req, res) {

  });

  //route to connect to users setting page
  app.get("/user/:username/settings", function (req, res) {

  });

  //route to connect to conect users to infomation page

  app.get("/info", function (req, res) {
    res.render("info page")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
