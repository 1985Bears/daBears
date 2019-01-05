var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  });
  return User;
};