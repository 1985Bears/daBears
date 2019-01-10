var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/delete-profile/:profile", function (req, res) {
    console.log("Profile Name");
    db.newProfile.destroy({
      where: {
        profileName: req.params.profile
      }
    }).then(function () {
      res.end();
    });
  });

  app.delete("/api/delete-favorite/:favorite", function (req, res) {
    db.Favorite.destroy({
      where: {
        beer_name: req.params.favorite
      }
    }).then(function () {
      res.end();
    });
  });

  app.post("/api/favorites", isAuthenticated, function (req, res) {
    let newFavorite = req.body;
    let id = req.user.id;

    db.Favorite.create({
      beer_name: newFavorite.beerName,
      qUserId: id
    }).then(function () {
      res.end();
    });
  });

  app.get("/api/favorites", function (req, res) {
    db.Favorite.findAll({
      where: {
        qUserId: req.user.id
      }
    }).then(function (favorites) {
      res.json(favorites);
    });
  });

  app.post("/api/getFavorites", function (req, res) {
    db.Beer.findAll({
      where: {
        beer_name: req.body.beer_name
      }
    }).then(function (favorites) {
      res.json(favorites);
    });
  })

  app.post("/api/newprofile", isAuthenticated, function (req, res) {
    let newProfile = req.body
    let id = req.user.id
    db.newProfile.create({
      profileName: newProfile.profileName,
      category: newProfile.category,
      qUserId: id
    }).then(function () {
      res.end();
    });
  });

  app.get("/api/newprofile", function (req, res) {
    db.newProfile.findAll({
      where: {
        qUserId: req.user.id
      }
    }).then(function (profiles) {
      res.json(profiles);
    });
  });

  app.post("/api/recommendations", isAuthenticated, function (req, res) {
    db.Beer.findAll({
      where: {
        category: req.body.category
      }
    }).then(function (profiles) {
      res.json(profiles);
    });
  });

  //delete a old user
  app.delete("/api/examples/:username", function (req, res) {
    db.Example.destroy({
      where: {
        user_name: req.params.username
      }
    }).then(function (user) {
      res.json(user);
    });
  });


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the profile page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("../profile");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    const newUser = req.body;
    db.User.create({
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      password: newUser.password
    }).then(function () {
      res.redirect(307, "/api/quiz");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the profile page.
  // Otherwise the user will be sent an error
  app.post("/api/quiz", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("../quiz");
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};