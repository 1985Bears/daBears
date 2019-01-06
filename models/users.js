var Sequelize = require("sequelize");

module.exports = function (sequilize, Datatypes) {
    const User = sequilize.define("User", {
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
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

    User.associate = (models) => {
        // Associating User with Posts
        // When an User is deleted, also delete any associated Posts
        User.hasMany(models.Favorite, {
            onDelete: "cascade"
        });
    };
    User.associate = (models) => {
        // Associating User with Posts
        // When an User is deleted, also delete any associated Posts
        User.hasMany(models.Flavor_Profile, {
            onDelete: "cascade"
        });
    };
    return User;
};