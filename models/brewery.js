module.exports = function (sequelize, DataTypes) {
    const Brewery = sequelize.define("Brewery", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,

        }
    });
    Brewery.associate = function (models) {
        // Associating Brewery with Posts
        // When an Brewery is deleted, also delete any associated Posts
        Brewery.hasMany(models.Beer, {
            onDelete: "cascade"
        });
    };
    return Brewery;
};