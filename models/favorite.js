module.exports = function (sequilize, Datatypes) {
    const Favorite = sequilize.define("Favorite", {
        profile_name: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        beer_style: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
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
    return Favorite;
};