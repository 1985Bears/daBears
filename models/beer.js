module.exports = function (sequelize, DataTypes) {
    const Beer = sequelize.define("Beer", {
        category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        beer_name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        abv: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        brewery: {
            type: DataTypes.STRING,
            allowNull: false,

        },

    });
    Beer.associate = function (models) {
        // We're saying that a Beer should belong to an Brewery
        // A Beer can't be created without an Brewery due to the foreign key constraint
        Beer.belongsTo(models.Brewery, {
            foreignKey: 'brewery_id'
        });
    };
    Beer.associate = function (models) {
        // We're saying that a Beer should belong to an Favorite
        // A Beer can't be created without an Author due to the foreign key constraint
        Beer.belongsTo(models.Flavor_Profile, {
            foreignKey: 'fl_profile_id'
        });
    };
    Beer.associate = function (models) {
        // We're saying that a Beer should belong to an Favorite
        // A Beer can't be created without an Author due to the foreign key constraint
        Beer.belongsToMany(models.Favorite, {
            through: models.Flavor_Profile,
            foreignKey: 'fav_beer_id'
        });
    };
    return Beer;
};