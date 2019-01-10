module.exports = function (sequilize, Datatypes) {
    const newProfile = sequilize.define("newProfile", {
        profileName: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
        ,
        qUserId: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    newProfile.associate = function (models) {
        // We're saying that a newProfile should belong to an Author
        // A newProfile can't be created without an Author due to the foreign key constraint
        newProfile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return newProfile;
};