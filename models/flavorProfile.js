module.exports = function (sequilize, Datatypes) {
    const Flavor_Profile = sequilize.define("Flavor_Profile", {
        flavor_name: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    Flavor_Profile.associate = function (models) {
        // We're saying that a Flavor_Profile should belong to an Author
        // A Flavor_Profile can't be created without an Author due to the foreign key constraint
        Flavor_Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    Flavor_Profile.associate = function (models) {
        Flavor_Profile.hasMany(models.Beer, {
            onDelete: "cascade"
        });
    };
    return Flavor_Profile;
};