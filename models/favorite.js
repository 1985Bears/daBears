module.exports = function (sequilize, Datatypes) {
    const Favorite = sequilize.define("Favorite", {
        beer_name: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        qUserId: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Favorite.associate = function (models) {
        // We're saying that a Favorite should belong to an Author
        // A Favorite can't be created without an Author due to the foreign key constraint
        Favorite.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    Favorite.associate = function (models) {
        Favorite.hasMany(models.Beer, {
            onDelete: "cascade"
        });
    };

    return Favorite;
};