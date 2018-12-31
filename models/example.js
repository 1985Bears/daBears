module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
      // user_preferences: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      //   allowNull: true
      // }
    }
  });
  return User;
};