var db = require("../models");

module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  //Creates a new user 
  app.post("/api/user", function (req, res) {
    db.Example.create(req.body).then(function (newUser) {
      res.json(newUser);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  //delete a old user
  app.delete("/api/examples/:username", function (req, res) {
    db.Example.destroy({ where: { user_name: req.params.username } }).then(function (user) {
      res.json(user);
    });
  });
};
