var db = require("../models");
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // Load example page and pass in an example by id
  app.get("/signin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-in.html"))

  });

  //route for login users in 
  app.get("/", function (req, res) {
    //get the required parameters
    const login = req.body;
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/sign-in.html"));
  });
  //route to allow first time users to sign up 
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });

  //route to allow first time users to sign up 
  app.get("/quiz", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/quiz.html"));

  });
  // Load homepage from a specific user
  app.get("/profile", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));

  });

  //route to connect users to their favorite beer choices
  app.get("/favorites", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });

  //route to connect users to their recommendations
  app.get("/recommendations", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/recommendations.html"));
  });

  //route to connect users to brewery locations
  app.get("/breweries", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/breweries.html"));
  });

  //route to connect user to create a new profile
  app.get("/:username/newprofile", function (req, res) {

  });

  //route to connect to conect users to infomation page
  app.get("/info", function (req, res) {
    res.render("info page")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../profile.html"));
  });
}
