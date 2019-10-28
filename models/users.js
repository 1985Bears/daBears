// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequilize, Datatypes) {
  const User = sequilize.define("User", {
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function(user, options) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = models => {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Favorite, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.newProfile, {
      onDelete: "cascade"
    });
  };
  return User;
};
